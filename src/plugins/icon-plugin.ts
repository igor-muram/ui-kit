export default {
  install: (app: any, options: any) => {
    app.config.globalProperties.$iconType = options.iconType;
  }
}