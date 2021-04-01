<template>
  <div class="footer">
    <div class="auto">
      <div class="footer-top">
        <!-- 热门专业 -->
        <div class="footer-profession">
          <div class="profession-title">
            <h3>热门专业</h3>
            <span></span>
          </div>
          <div class="pro-left">
            <div class="pro-list">
              <p>烘焙甜点专业</p>
              <ul>
                <li>
                  <router-link to="">烘焙甜点全能班</router-link>
                </li>
                <li>
                  <router-link to="">烘焙甜点金领班</router-link>
                </li>
                <li>
                  <router-link to="">烘焙甜点经典班</router-link>
                </li>
              </ul>
            </div>
            <div class="pro-list">
              <p>西餐料理专业</p>
              <ul>
                <li>
                  <router-link to="">西餐料理金领班</router-link>
                </li>
                <li>
                  <router-link to="">西餐料理精英班</router-link>
                </li>
                <li>
                  <router-link to="">西餐料理简餐班</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="pro-right">
            <div class="pro-list">
              <p>咖啡饮品专业</p>
              <ul>
                <li>
                  <router-link to="">咖啡饮品班</router-link>
                </li>
              </ul>
            </div>
            <div class="pro-list">
              <p>精品调酒专业</p>
              <ul>
                <li>
                  <router-link to="">精品调酒班</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 关于OMICK -->
        <div class="footer-profession">
          <div class="profession-title">
            <h3>关于OMICK</h3>
            <span></span>
          </div>
          <div class="pro-left">
            <div class="pro-list">
              <p>学院介绍</p>
              <ul>
                <li>
                  <router-link to="">学院简介</router-link>
                </li>
                <li>
                  <router-link to="">学院环境</router-link>
                </li>
                <li>
                  <router-link to="">在线参观</router-link>
                </li>
                <li>
                  <router-link to="">活力校园</router-link>
                </li>
              </ul>
            </div>
            <div class="pro-list">
              <p>名师风采</p>
              <ul>
                <li>
                  <router-link to="">名师介绍</router-link>
                </li>
                <li>
                  <router-link to="">师生作品</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 资讯 -->
        <div class="footer-profession">
          <div class="profession-title">
            <h3>资讯</h3>
            <span></span>
          </div>
          <div class="pro-left">
            <div class="pro-list">
              <p>新闻</p>
              <ul>
                <li>
                  <router-link to="">学院新闻</router-link>
                </li>
                <li>
                  <router-link to="">行业新闻</router-link>
                </li>
                <li>
                  <router-link to="">学生风采</router-link>
                </li>
                <li>
                  <router-link to="">入学答疑</router-link>
                </li>
              </ul>
            </div>
            <div class="pro-list">
              <p>创就业指导</p>
              <ul>
                <li>
                  <router-link to="">创业指导</router-link>
                </li>
                <li>
                  <router-link to="">就业指导</router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 联系我们 -->
        <div class="footer-profession">
          <div class="profession-title">
            <h3>联系我们</h3>
            <span></span>
          </div>
          <div class="pro-left">
            <div class="pro-list">
              <p>等您来</p>
              <ul>
                <li>
                  <router-link to="">白云校区:广州市白云区西槎路汇华街自编3号</router-link>
                </li>
                <li>
                  <router-link to="">点击免费通话</router-link>
                </li>
              </ul>
            </div>
            <div class="pro-list">
              <p>联系方式</p>
              <div class="way">
                <div class="way-list">
                  <p></p>
                </div>
                <router-link to="http://weibo.com/u/5089097397">
                  <div class="way-weibo"></div>
                </router-link>
                <router-link to="">
                  <div class="way-phone"></div>
                </router-link>
              </div>
              <p>联系电话: <span>400-0803-068</span></p>
            </div>
          </div>
        </div>
        <!-- 学费详情 -->
        <div class="footer-profession">
          <div class="profession-title">
            <h3>学费详情</h3>
            <span></span>
          </div>
          <div class="pro-left">
            <div class="pro-list">
              <p>获取学费</p>
              <div class="tuition-form">
                <form action="">
                  <input type="text" placeholder="姓名">
                  <input type="text" placeholder="QQ/微信">
                  <input type="" placeholder="联系电话">
                  <select name="" id="">
                    <option value="西点专业">西点专业</option>
                    <option value="西餐专业">西餐专业</option>
                    <option value="咖啡专业">咖啡专业</option>
                    <option value="调酒专业">调酒专业</option>
                  </select>
                  <button>提交</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div>
          <router-link to="https://beian.miit.gov.cn/">备案号：粤ICP备17061741号</router-link>
        </div>
        <div class="copyright">版权所有：广州欧米奇西点职业培训学校</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="less">
.footer {
  background: hsla(0, 0%, 15%, 1);
  color: rgba(189, 189, 189, 1);

  .footer-top {
    display: block;
    height: 420px;
    width: 100%;
    min-width: 1200px;
    padding-top: 40px;
    border-bottom: 1px solid #3c3c3c;
    -moz-user-select: none;
    user-select: none;
    -webkit-user-select: none;

    .footer-profession {
      margin: 0 30px 0 34px;
      width: 348px;
      float: left;

      &:nth-child(2) {
        width: 175px;
        margin: 0 30px 0 0;
      }

      &:nth-child(3) {
        width: 160px;
        margin: 0 30px 0 0;
      }

      &:nth-child(4) {
        width: 160px;
        margin: 0 30px 0 0;

        .pro-left {
          .pro-list {
            position: relative;

            &:last-child {
              p {
                display: block;
                width: 160px;
                text-align: left;
                color: rgba(189, 189, 189, 1);
                font-size: 18px;
                line-height: 2.3;
                font-weight: 200;
                padding-top: 10px;
                border-bottom: 1px solid #3c3c3c;
                margin-bottom: 7px;
                cursor: default;
                transition: .2s ease;
                -moz-transition: .2s ease;
                -webkit-transition: .2s ease;

                &:last-child {
                  display: block;
                  width: 200px;
                  position: absolute;
                  top: 113px;
                  left: 0px;
                  font-size: 15px;
                  color: #7c7c7c;
                  line-height: 1;
                  margin-top: -2px;
                  border-bottom: none;

                  span {
                    color: #fff;
                    font-size: 13px;
                  }
                }
              }

              .way {
                display: block;
                width: 190px;
                position: absolute;
                left: -6px;
                top: 65px;

                .way-list {
                  float: left;
                  transition: all .4s;
                  -ms-transition: all .4s;
                  -o-transition: all .4s;
                  -moz-transition: all .4s;
                  -webkit-transition: all .4s;
                  display: block;
                  width: 34px;
                  height: 34px;
                  margin: 0 5px;
                  background-image: url(http://www.shomick.com/newpc/image/icon1.png);
                  background-repeat: no-repeat;
                  background-position: -4px -3px;

                  &:hover {
                    background-position: -4px -42px;

                    p {
                      transition: all 1.4s;
                      -ms-transition: all 1.4s;
                      -o-transition: all 1.4s;
                      -moz-transition: all 1.4s;
                      -webkit-transition: all 1.4s;
                      visibility: inherit;
                      opacity: 1;
                    }
                  }

                  p {
                    transition: all 1.4s;
                    -ms-transition: all 1.4s;
                    -o-transition: all 1.4s;
                    -moz-transition: all 1.4s;
                    -webkit-transition: all 1.4s;
                    display: block;
                    width: 110px;
                    height: 110px;
                    position: absolute;
                    top: -144px;
                    left: 97px;
                    visibility: hidden;
                    opacity: 0;
                    background: url(http://www.gzomick.com/newpc/image/weixin.jpg) no-repeat left center;
                    background-size: cover;
                  }
                }

                a {
                  display: block;
                  float: left;

                  .way-weibo {
                    background-position: -95px -3px;
                    transition: all .4s;
                    -ms-transition: all .4s;
                    -o-transition: all .4s;
                    -moz-transition: all .4s;
                    -webkit-transition: all .4s;
                    display: block;
                    width: 34px;
                    height: 34px;
                    margin: 0 5px;
                    background-image: url(http://www.shomick.com/newpc/image/icon1.png);
                    background-repeat: no-repeat;

                    &:hover {
                      background-position: -95px -42px;
                    }
                  }

                  .way-phone {
                    background-position: 8px -90px;
                    transition: all .4s;
                    -ms-transition: all .4s;
                    -o-transition: all .4s;
                    -moz-transition: all .4s;
                    -webkit-transition: all .4s;
                    display: block;
                    width: 34px;
                    height: 34px;
                    margin: 0 5px;
                    background-image: url(http://www.shomick.com/newpc/image/icon1.png);
                    background-repeat: no-repeat;
                  }
                }
              }
            }

            ul {
              li {
                font-size: 13px;
                height: 50px;
              }
            }
          }
        }
      }

      &:nth-child(5) {
        width: 175px;
        margin: 0;

        .pro-left {
          .pro-list {
            .tuition-form {
              form {
                input {
                  transition: all .2s;
                  -o-transition: all .2s;
                  -ms-transition: all .2s;
                  -moz-transition: all .2s;
                  -webkit-transition: all .2s;
                  display: block;
                  width: 144px;
                  height: 35px;
                  float: left;
                  background: #262626;
                  border: 1px solid #3c3c3c;
                  font-weight: 200;
                  outline: none;
                  color: #fff;
                  padding-left: 6px;
                  border-radius: 6px;
                  -moz-border-radius: 6px;
                  -webkit-border-radius: 6px;
                  margin: 4px 0;
                }

                select {
                  display: block;
                  width: 144px;
                  height: 38px;
                  float: left;
                  background: #262626;
                  border: 1px solid #3c3c3c;
                  font-weight: 200;
                  outline: none;
                  color: #fff;
                  padding-left: 6px;
                  border-radius: 6px;
                  -moz-border-radius: 6px;
                  -webkit-border-radius: 6px;
                  margin: 4px 0;

                }

                button {
                  transition: all .4s;
                  -ms-transition: all .4s;
                  -o-transition: all .4s;
                  -moz-transition: all .4s;
                  -webkit-transition: all .4s;
                  display: block;
                  width: 60px;
                  height: 30px;
                  background: #434343;
                  border-radius: 6px;
                  -moz-border-radius: 6px;
                  -webkit-border-radius: 6px;
                  //line-height: 30px;
                  text-align: center;
                  font-size: 14px;
                  font-weight: 200;
                  color: #858585;
                  outline: none;
                  border: 1px solid #3c3c3c;
                }
              }
            }
          }
        }
      }

      .profession-title {
        margin-bottom: 5px;

        h3 {
          display: block;
          width: 100%;
          text-align: left;
          font-size: 23px;
          font-weight: 300;
          color: rgba(189, 189, 189, 1);
          padding: 0 0 7px 0;
        }

        span {
          display: block;
          width: 22px;
          height: 2px;
          float: left;
          background: #9e5a46;
        }
      }

      .pro-left, .pro-right {
        float: left;

        .pro-list {
          p {
            display: block;
            width: 160px;
            text-align: left;
            color: rgba(189, 189, 189, 1);
            font-size: 18px;
            line-height: 2.3;
            font-weight: 200;
            padding-top: 10px;
            border-bottom: 1px solid #3c3c3c;
            margin-bottom: 7px;
            cursor: default;
            transition: .2s ease;
            -moz-transition: .2s ease;
            -webkit-transition: .2s ease;
          }

          ul {
            width: 100%;
            text-align: left;

            li {
              display: block;
              width: 100%;
              height: 26px;
              line-height: 26px;
              text-align: left;
              color: #3c3c3c;
              font-size: 15px;

              a {
                color: #777;
                font-weight: 200;
                transition: .2s ease;
                -moz-transition: .2s ease;
                -webkit-transition: .2s ease;
              }
            }
          }
        }
      }

      .pro-right {
        float: right;
      }
    }
  }

  .footer-bottom {
    display: block;
    width: 100%;
    min-width: 1200px;
    height: 104px;
    background: #262626;
    font-size: 14px;
    text-align: center;

    div {
      height: 55px;
      line-height: 55px;
      color: #969696;
      display: inline-block;

      a {
        color: #969696;
      }

      div {

      }
    }
  }
}
</style>