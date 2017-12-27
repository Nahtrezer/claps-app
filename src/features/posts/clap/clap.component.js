import templateUrl from './clap.tpl.html';

export const ClapComponent = {
  bindings: {
    post: "<",
  },
  template: templateUrl,
  controller: class ClapComponent {
    constructor($timeout, ClapService) {
      "ngInject";
      this.$timeout = $timeout;
      this.ClapService = ClapService;
      this.showRemoveClapButton = false;
      this.showTooltip = false;
    }

    $onInit() {
      let clapsCount = this.ClapService.getPostClaps();
      if (clapsCount > 0) {
        this.showRemoveClapButton = true;
      }
    }

    clapOnPost() {
      let clapsOnPost = this.ClapService.getPostClaps();

      if (clapsOnPost == 50) {
        this.tooltipText = "Sorry, no more claps";
      } else {
        this.ClapService.clapOnPost(this.post);
        this.tooltipText = "Thanks!";
        this.showRemoveClapButton = true;
      }

      this.showTooltip = true;
      this.$timeout(function () {
        this.showTooltip = false;
      }.bind(this), 500);
    }

    removeClap() {
      let clapsOnPost = this.ClapService.getPostClaps();

      if (clapsOnPost !== 0) {
        this.ClapService.removeClapFromPost(this.post);
      } else {
        this.showRemoveClapButton = false;
      }
    }
  }
};
