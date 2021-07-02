window.jQuery = (selectorOrArray) => {
  let elements;
  if (typeof selectorOrArray === "string") {
    elements = document.querySelectorAll(selectorOrArray);
  } else if (selectorOrArray instanceof Array) {
    elements = selectorOrArray;
  }
  return {
    oldApi: selectorOrArray.oldApi,
    addClass(className) {
      for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(className);
      }
      return this;
    },
    find(selector) {
      let array = [];
      // for (let i = 0; i < elements.length; i++) {
      //   array = array.concat(
      //     Array.from(elements[i].querySelectorAll(selector))
      //   );
      // }
      // this.each((node) => {
      //   array = array.concat(Array.from(node.querySelectorAll(selector)));
      // });
      this.each((node) => {
        array.push(...node.querySelectorAll(selector));
      });
      array.oldApi = this;
      return jQuery(array);
    },
    end() {
      return this.oldApi;
    },
    each(fn) {
      for (let i = 0; i < elements.length; i++) {
        fn.call(null, elements[i], i);
      }
      return this;
    },
    parent() {
      const array = [];
      this.each((node) => {
        if (array.indexOf(node.parentNode) === -1) {
          array.push(node.parentNode);
        }
      });
      return jQuery(array);
    },
    children() {
      const array = [];
      this.each((node) => {
        array.push(...node.children);
      });
      return jQuery(array);
    },
    siblings() {
      let array = [];
      // for (let i = 0; i < elements.length; i++) {
      //   const es = Array.from(elements[i].parentNode.children).filter(
      //     (n) => n !== elements[i]
      //   );
      //   array = array.concat(es);
      // }
      this.each((node) => {
        array = array.concat(
          Array.from(node.parentNode.children).filter((n) => n !== node)
        );
      });
      return jQuery(array);
    },
    index() {
      this.each((node) => {
        const list = node.parentNode.children;
        for (let i = 0; i < list.length; i++) {
          if (node === list[i]) {
            console.log(i);
          }
        }
      });
      return this;
    },
    next() {
      const array = [];
      this.each((node) => {
        let x = node.nextSibling;
        while (x && x.nodeType === 3) {
          x = x.nextSibling;
        }
        array.push(x);
      });
      return jQuery(array);
    },
    previous() {
      const array = [];
      this.each((node) => {
        let x = node.previousSibling;
        while (x && x.nodeType === 3) {
          x = x.previousSibling;
        }
        array.push(x);
      });
      return jQuery(array);
    },
    print() {
      console.log(elements);
      return this;
    },
  };
};
