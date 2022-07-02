# 登录页

# regexp
- = (.*) => 
  -  ($1){

- this.props.history.push\((.*)\)
  - this.$router.push({path:$1})