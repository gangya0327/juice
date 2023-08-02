const oImgFileSelector = document.querySelector('#imgFileSelector');
const oOriginImg = document.querySelector('#originImgPreview');
const oCompressedImg = document.querySelector('#compressedImgPreview');

const IMG_TYPES = {
  'image/jpeg': 'image/jpeg',
  'image/png': 'image/png',
  'image/gif': 'image/gif',
};
let imgFile = null;
const reader = new FileReader();
let quality = 90;
let compressedImgSrc = '';

function init() {
  bindEvent();
}

function bindEvent() {
  oImgFileSelector.addEventListener('change', handleImgFileSelectorChange, false);
}

function handleImgFileSelectorChange(e) {
  imgFile = e.target.files[0];
  console.log('imgFile :>> ', imgFile);
  // 图片格式校验
  if (!imgFile || !IMG_TYPES[imgFile.type]) {
    alert('请选择正确的图片');
    clearImgFileSelector();
    return;
  }

  renderImg();
}

function renderImg() {
  if (imgFile instanceof File) {
    reader.onload = async () => {
      const originImgSrc = reader.result;
      oOriginImg.src = originImgSrc;
      toggleImgVisible(oOriginImg, true);

      await createCompressedImage({
        imgSrc: originImgSrc,
        type: imgFile.type,
      });
      oCompressedImg.src = compressedImgSrc;
      toggleImgVisible(oCompressedImg, true);
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

function compress(oCan, imgSrc, type) {
  compressedImgSrc = oCan.toDataURL(type, quality / 100);

  console.log(imgSrc.length, compressedImgSrc.length, quality);

  if (compressedImgSrc.length >= imgSrc.length && quality > 10) {
    quality -= 10;
    compress(oCan, imgSrc, type);
  }
}

function clearImgFileSelector() {
  oImgFileSelector.value = '';
  imgFile = null;
  toggleImgVisible(oOriginImg, false);
  toggleImgVisible(oCompressedImg, false);
}

function toggleImgVisible(node, visible) {
  if (visible) {
    node.classList.add('show');
    node.classList.remove('hide');
  } else {
    node.classList.add('hide');
    node.classList.remove('show');
  }
}

init();
