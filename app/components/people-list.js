import Component from '@ember/component';

export default Component.extend({
  //adding function to handle person
  actions: {
    showPerson(person){
      alert(person)
    }
  }
});
