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
@import "src/styles/Footer";
</style>