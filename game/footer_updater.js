// 批量更新footer的JavaScript脚本

// 新的footer HTML内容
const newFooter = `
<!-- New Footer with About and Links -->
<footer class="bg-dark text-white pt-5 pb-4">
  <div class="container">
      <div class="row">
          <!-- About Column -->
          <div class="col-md-4 mb-4">
              <h4 class="text-info mb-3">About Basket Random</h4>
              <p class="text-white-50">Basket Random Online offers free basketball games for everyone. Our platform provides the best unblocked gaming experience with no downloads required.</p>
              <p class="text-white-50">© 2025 basketrandomgames.github.io - All rights reserved</p>
          </div>
          
          <!-- Quick Links Column -->
          <div class="col-md-4 mb-4">
              <h4 class="text-info mb-3">Quick Links</h4>
              <ul class="list-unstyled">
                  <li class="mb-2"><a href="/" class="text-white-50 text-decoration-none"><i class="fa fa-angle-right me-2"></i>Home</a></li>
                  <li class="mb-2"><a href="/dmca.html" class="text-white-50 text-decoration-none"><i class="fa fa-angle-right me-2"></i>DMCA</a></li>
                  <li class="mb-2"><a href="/terms.html" class="text-white-50 text-decoration-none"><i class="fa fa-angle-right me-2"></i>Terms</a></li>
                  <li class="mb-2"><a href="/privacy.html" class="text-white-50 text-decoration-none"><i class="fa fa-angle-right me-2"></i>Privacy Policy</a></li>                </ul>
          </div>
          
          <!-- Contact & Social Column -->
          <div class="col-md-4 mb-4">
              <h4 class="text-info mb-3">Connect With Us</h4>
              <div class="social-icons mb-4">
                  <a href="#" class="text-white me-3"><i class="fa fa-facebook-square fa-2x"></i></a>
                  <a href="#" class="text-white me-3"><i class="fa fa-twitter-square fa-2x"></i></a>
                  <a href="#" class="text-white me-3"><i class="fa fa-instagram fa-2x"></i></a>
                  <a href="#" class="text-white me-3"><i class="fa fa-youtube-square fa-2x"></i></a>
              </div>
              <!-- <p class="text-white-50"><i class="fa fa-envelope me-2"></i> Contact: support@basketrandom.com</p> -->
          </div>
      </div>
  </div>
  <div class="text-center py-3 mt-3 border-top border-secondary">
      <p class="text-white-50 mb-0">Basket Random Online - Play the best basketball games online for free</p>
  </div>
</footer>

<script src="../js/jquery-3.6.2.min.js" type="text/javascript"></script>
<script src="../js/lazysizes.min.js" type="text/javascript"></script>
<script src="../js/popper.min.js" type="text/javascript"></script>
<script src="../js/bootstrap.min.js" type="text/javascript"></script>
<script src="../js/script.js" type="text/javascript"></script>
<script src="../js/custom.js" type="text/javascript"></script>
`;

// 使用方法:
// 1. 将此文件保存为 footer_updater.js
// 2. 在命令行中运行 node footer_updater.js
// 3. 脚本将自动更新所有game目录下的HTML文件

const fs = require('fs');
const path = require('path');

// 获取game目录路径
const gameDir = path.join(__dirname);

// 读取game目录下的所有HTML文件
fs.readdir(gameDir, (err, files) => {
  if (err) {
    console.error('读取目录出错:', err);
    return;
  }

  // 过滤出HTML文件
  const htmlFiles = files.filter(file => file.endsWith('.html'));
  console.log(`找到 ${htmlFiles.length} 个HTML文件需要更新`);

  // 更新每个HTML文件
  htmlFiles.forEach(file => {
    const filePath = path.join(gameDir, file);
    
    // 读取文件内容
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(`读取文件 ${file} 出错:`, err);
        return;
      }

      // 替换footer部分
      let newContent;
      
      // 检查是否包含旧的footer
      if (data.includes('<div class="footer-copyright py-4">')) {
        // 替换旧的footer
        newContent = data.replace(
          /(<\/div>\s*<!-- end Poplular -->\s*<\/div>\s*<!-- end container -->\s*)(<div class="footer-copyright py-4">[\s\S]*?)(<script[\s\S]*?<\/script>\s*<\/body>\s*<\/html>)/,
          `$1\n${newFooter}\n</body>\n</html>`
        );
      } else if (data.includes('<!-- New Footer with About and Links -->')) {
        // 已经有新的footer，不需要更新
        console.log(`文件 ${file} 已经有新的footer，跳过`);
        return;
      } else {
        // 没有找到旧的footer，在结尾前插入新的footer
        newContent = data.replace(
          /(<\/div>\s*<!-- end Poplular -->\s*<\/div>\s*<!-- end container -->\s*)(<\/body>\s*<\/html>)/,
          `$1\n${newFooter}\n</body>\n</html>`
        );
      }

      // 写入更新后的内容
      fs.writeFile(filePath, newContent, 'utf8', err => {
        if (err) {
          console.error(`更新文件 ${file} 出错:`, err);
          return;
        }
        console.log(`成功更新文件: ${file}`);
      });
    });
  });
}); 