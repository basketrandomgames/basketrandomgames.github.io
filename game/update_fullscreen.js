// Script to add fullscreen functionality to all game HTML files

const fs = require('fs');
const path = require('path');

// Fullscreen functionality script to add to each file
const fullscreenScript = `
<!-- Fullscreen button functionality -->
<script>
document.addEventListener('DOMContentLoaded', function() {
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const gameIframe = document.getElementById('game-iframe');
    const gameContainer = document.querySelector('.game-container');
    
    // Detect if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Adjust fullscreen button on mobile devices
    if (isMobile) {
        fullscreenBtn.style.padding = '10px 15px';
        fullscreenBtn.style.fontSize = '1.2em';
    }
    
    // Fullscreen functionality
    fullscreenBtn.addEventListener('click', function() {
        if (gameIframe.requestFullscreen) {
            gameIframe.requestFullscreen();
        } else if (gameIframe.webkitRequestFullscreen) { /* Safari */
            gameIframe.webkitRequestFullscreen();
        } else if (gameIframe.msRequestFullscreen) { /* IE11 */
            gameIframe.msRequestFullscreen();
        }
    });
    
    // Change icon when fullscreen state changes
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

// Get current directory path
const gameDir = __dirname;

// Read all files in the directory
fs.readdir(gameDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // Filter only HTML files
    const htmlFiles = files.filter(file => file.endsWith('.html'));
    console.log(`Found ${htmlFiles.length} HTML files to update`);

    // Update each HTML file
    htmlFiles.forEach(file => {
        const filePath = path.join(gameDir, file);
        
        // Read file content
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file ${file}:`, err);
                return;
            }

            // Check if script already exists
            if (data.includes('<!-- Fullscreen button functionality -->')) {
                console.log(`File ${file} already has fullscreen functionality`);
                return;
            }

            // Add fullscreen script before closing body tag
            let updatedContent = data.replace(
                /(<script src="\.\.\/js\/custom\.js"[^>]*><\/script>)(\s*<\/body>)/,
                `$1\n\n${fullscreenScript}\n$2`
            );

            // Write updated content back to file
            fs.writeFile(filePath, updatedContent, 'utf8', err => {
                if (err) {
                    console.error(`Error updating file ${file}:`, err);
                    return;
                }
                console.log(`Successfully updated file: ${file}`);
            });
        });
    });
}); 