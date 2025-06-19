// 批量更新footer的JavaScript脚本

// 游戏容器和全屏按钮的样式
const gameContainerStyles = `
<style type="text/css">
.game-container {
  position: relative;
  width: 900px;
  height: 675px;
  overflow: hidden;
  margin: 0 auto;
}
.fullscreen-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(0,0,0,0.5);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;
}
.fullscreen-btn:hover {
  background-color: rgba(0,0,0,0.8);
}

/* 响应式设计 - 手机端优化 */
@media (max-width: 992px) {
  .game-container {
    width: 100%;
    height: 500px;
  }
}

@media (max-width: 768px) {
  .game-container {
    height: 400px;
  }
  h1 {
    font-size: 1.8rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .game-container {
    height: 300px;
  }
  .fullscreen-btn {
    padding: 5px 8px;
  }
  h1 {
    font-size: 1.5rem;
  }
}
</style>
`;

// 游戏描述内容
const gameDescription = `
<div class="card p-4 mb-4" style="background-color: rgba(0,0,0,0.7);">
    <section>
        <h2 class="text-white mb-3">Play Basketball Games Online - Free Experience</h2>
        
        <div class="row">
            <div class="col-md-6">
                <div class="mb-3">
                    <h3 class="text-info mb-2">Game Features</h3>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item bg-dark text-white py-2">🏀 Simple and easy controls</li>
                        <li class="list-group-item bg-dark text-white py-2">🏆 Challenge high scores</li>
                        <li class="list-group-item bg-dark text-white py-2">⚡ No installation needed</li>
                        <li class="list-group-item bg-dark text-white py-2">🌈 Fun for all ages</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6">
                <div class="mb-3">
                    <h3 class="text-info mb-2">How to Play</h3>
                    <p class="text-white">Use mouse or touch to control direction and power. Enjoy this fun basketball game online!</p>
                </div>
                <div class="mb-3">
                    <h3 class="text-info mb-2">Why Choose Us</h3>
                    <p class="text-white">Free, no registration, works on all devices. Perfect for basketball fans and casual gamers alike!</p>
                </div>
            </div>
        </div>
    </section>
</div>
`;

// 全屏按钮JavaScript代码
const fullscreenScript = `
<script>
document.addEventListener('DOMContentLoaded', function() {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const gameIframe = document.getElementById('game-iframe');
    const gameContainer = document.querySelector('.game-container');
    
    // 检测是否是移动设备
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // 在移动设备上调整全屏按钮的位置和大小
    if (isMobile) {
        fullscreenBtn.style.padding = '10px 15px';
        fullscreenBtn.style.fontSize = '1.2em';
    }
    
    fullscreenBtn.addEventListener('click', function() {
        if (gameIframe.requestFullscreen) {
            gameIframe.requestFullscreen();
        } else if (gameIframe.webkitRequestFullscreen) { /* Safari */
            gameIframe.webkitRequestFullscreen();
        } else if (gameIframe.msRequestFullscreen) { /* IE11 */
            gameIframe.msRequestFullscreen();
        }
    });
    
    // Change icon when entering or exiting fullscreen
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
    
    function handleFullscreenChange() {
        if (document.fullscreenElement || 
            document.webkitFullscreenElement || 
            document.mozFullScreenElement ||
            document.msFullscreenElement) {
            fullscreenBtn.innerHTML = '<i class="fa fa-compress"></i>';
        } else {
            fullscreenBtn.innerHTML = '<i class="fa fa-expand"></i>';
        }
    }
});
</script>
`;

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
${fullscreenScript}
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

      // 添加游戏容器样式到head部分
      let newContent = data;
      
      // 检查是否已经有游戏容器样式
      if (!newContent.includes('.game-container {')) {
        newContent = newContent.replace('</head>', `${gameContainerStyles}\n</head>`);
      }
      
      // 更新游戏iframe容器为响应式设计
      newContent = newContent.replace(
        /<div class="mx-auto" style="width: 900px; height: 675px; overflow: hidden;">\s*<iframe/g,
        `<div class="game-container">\n                    <button id="fullscreen-btn" class="fullscreen-btn" title="Fullscreen Mode">\n                        <i class="fa fa-expand"></i>\n                    </button>\n                    <iframe id="game-iframe"`
      );
      
      // 添加游戏描述内容
      if (newContent.includes('<h2 class="my-4 text-center">Description</h2>') && 
          !newContent.includes('Game Features')) {
        newContent = newContent.replace(
          '<h2 class="my-4 text-center">Description</h2>',
          '<h2 class="my-4 text-center text-white">Description</h2>\n            ' + gameDescription
        );
      }
      
      // 替换footer部分
      if (newContent.includes('<div class="footer-copyright py-4">')) {
        // 替换旧的footer
        newContent = newContent.replace(
          /(<\/div>\s*<!-- end Poplular -->\s*<\/div>\s*<!-- end container -->\s*)(<div class="footer-copyright py-4">[\s\S]*?)(<script[\s\S]*?<\/script>\s*<\/body>\s*<\/html>)/,
          `$1\n${newFooter}\n</body>\n</html>`
        );
      } else if (newContent.includes('<!-- New Footer with About and Links -->')) {
        // 已经有新的footer，只更新游戏容器和描述
        console.log(`文件 ${file} 已经有新的footer，只更新游戏容器和描述`);
      } else {
        // 没有找到旧的footer，在结尾前插入新的footer
        newContent = newContent.replace(
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