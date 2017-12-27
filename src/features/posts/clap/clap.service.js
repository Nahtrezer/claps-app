export class ClapService {
  constructor($http, $log) {
    "ngInject";
    this.$http = $http;
    this.logger = $log;
    this.claps = 0;
  }

  getPostClaps(post) {
    return this.claps;
  }

  clapOnPost(post) {
    if (this.claps !== 50) {
      this.claps += 1;
    }
    return this.claps;
  }

  removeClapFromPost(post) {
    if (this.claps !== 0) {
      this.claps -= 1;
    }
    return this.claps;
  }
}
