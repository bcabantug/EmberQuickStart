import Route from '@ember/routing/route';

export default Route.extend({
  //adding model method to route
  model(){
    return ["Marie Curie", "Mae Jemison", "Albert Hofmann"];
  }

});
