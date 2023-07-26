export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to);
});

console.log("Hey i am a middleware for auth");
