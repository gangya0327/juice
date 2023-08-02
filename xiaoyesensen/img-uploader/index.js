const oImgFileSelector = document.querySelector('#imgFileSelector');
const oOriginImgPreview = document.querySelector('#originImgPreview');
const oCompressedImgPreview = document.querySelector('#compressedImgPreview');

const reader = new FileReader();
let quality = 90;
let compressedImgSrc = '';

const IMG_TYPES = {
  'image/jpeg': 'image/jpeg',
  'image/png': 'image/png',
  'image/gif': 'image/gif',
};

const init = () => {
  bindEvent();
};

function bindEvent() {
  oImgFileSelector.addEventListener('change', handleFileSelectorChange, false);
}

let imgFile;

function handleFileSelectorChange(e) {
  imgFile = e.target.files[0];
  console.log('imgFile :>> ', imgFile);
  if (!imgFile || !IMG_TYPES[imgFile.type]) {
    alert('请上传正确格式的图片');
    setImgFileEmpty();
    return;
  }

  setImgPreview(imgFile);
}

function setImgFileEmpty() {
  oImgFileSelector.value = '';
  imgFile = null;
  setPreviewVisible(oOriginImgPreview, false);
  setPreviewVisible(oCompressedImgPreview, false);
}

function setImgPreview() {
  if (imgFile instanceof File) {
    reader.onload = async () => {
      const originImgSrc = reader.result;
      oOriginImgPreview.src = originImgSrc;
      setPreviewVisible(oOriginImgPreview, true);

      await createCompressedImage({
        imgSrc: originImgSrc,
        type: imgFile.type,
      });
      oCompressedImgPreview.src = compressedImgSrc;
      setPreviewVisible(oCompressedImgPreview, true);

      console.log(compressedImgSrc.length, originImgSrc.length, quality);
    };
    reader.readAsDataURL(imgFile);
  }
}

function createCompressedImage({ imgSrc, type }) {
  const oCan = document.createElement('canvas');
  const oImg = document.createElement('img');
  const ctx = oCan.getContext('2d');

  oImg.src = imgSrc;

  return new Promise((resolve) => {
    oImg.onload = () => {
      const imgWidth = oImg.width;
      const imgHeight = oImg.height;

      oCan.width = imgWidth;
      oCan.height = imgHeight;

      ctx.drawImage(oImg, 0, 0, imgWidth, imgHeight);
      compress(oCan, imgSrc, type);
      resolve();
    };
  });
}

function compress(canvas, imgSrc, type) {
  compressedImgSrc = canvas.toDataURL(type, quality / 100);
  console.log(
    'compressedImgSrc: ',
    compressedImgSrc.length,
    'originImgSrc: ',
    imgSrc.length,
    compressedImgSrc.length >= imgSrc.length
  );
  if (compressedImgSrc.length >= imgSrc.length && quality > 10) {
    quality -= 10;
    compress(canvas, imgSrc, type);
  }
}

function setPreviewVisible(node, visible) {
  switch (visible) {
    case true:
      node.classList.remove('hide');
      node.classList.add('show');
      break;
    case false:
      node.classList.remove('show');
      node.classList.add('hide');
      break;
    default:
      break;
  }
}

init();
