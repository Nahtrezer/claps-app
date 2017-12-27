import { ClapComponent } from './clap.component';
import ClapTemplate from './clap.tpl.html';

import { ClapService } from './clap.service';

describe('Claps sub-module:', function () {
  describe('Component:', function () {
    let component = ClapComponent;

    it('has proper template', function() {
      expect(component.template).toEqual(ClapTemplate);
    });

    it('has defined controller', function() {
      expect(component.controller).toBeTruthy();
    });
  });

  describe('Service:', function() {
    let service = new ClapService();
    let dummyPost = {
      id: 1,
      title: 'Post title',
      body: 'Post body'
    };

    it('claps count should start with 0', function() {
      expect(service.claps).toEqual(0);
    });

    it('claping should increment claps count by 1', function() {
      expect(service.clapOnPost(dummyPost)).toEqual(1);
    });

    it('remove clap should set claps back to 0', function() {
      expect(service.removeClapFromPost(dummyPost)).toEqual(0);
    });

    it('claps count cannot be more than 50', function() {
      for (let i = 0; i <= 100; i++) {
        service.clapOnPost(dummyPost);
      }
      expect(service.getPostClaps(dummyPost)).toEqual(50);
    });

    it('claps count cannot be less than 0', function() {
      for (let i = 0; i <= 100; i++) {
        service.removeClapFromPost(dummyPost);
      }
      expect(service.getPostClaps(dummyPost)).toEqual(0);
    });
  });
});
