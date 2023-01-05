const loader = {
  show: () => {
    let loader: any = document.getElementById("rgl-overlay");
    if (loader) {
      loader.dataset.count = loader.dataset.count
        ? parseInt(loader.dataset.count) + 1
        : 1;
      loader.style.display = "block";
    }
  },
  hide: () => {
    let loader: any = document.getElementById("rgl-overlay");
    if (loader) {
      loader.dataset.count = loader.dataset.count
        ? parseInt(loader.dataset.count) - 1
        : 0;
      if (loader.dataset.count == 0) {
        setTimeout(() => {
          loader.style.display = "none";
        });
      }
    }
  },
};

export default loader;
