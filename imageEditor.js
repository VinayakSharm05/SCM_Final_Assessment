 // Image Upload and File Selection
 document.getElementById('file-explorer-button').addEventListener('click', function() {
    console.log('File explorer button clicked');
    
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.addEventListener('change', function(event) {
        const file = event.target.files[0];
        console.log('File selected:', file);
        
        if (file) {
            const reader = new FileReader();
            
            reader.onloadstart = function() {
                console.log('Starting to read file');
            }
            
            reader.onload = function(e) {
                console.log('File read successfully');
                const uploadedImage = document.getElementById('uploadedImage');
                
                // Debugging logs
                console.log('Image source:', e.target.result);
                console.log('Image element:', uploadedImage);
                
                uploadedImage.src = e.target.result;
                uploadedImage.style.display = 'block';
                uploadedImage.style.width = '200px';  // Fixed initial width
                uploadedImage.style.position = 'absolute';
                uploadedImage.style.top = '50%';
                uploadedImage.style.left = '50%';
                uploadedImage.style.transform = 'translate(-50%, -50%)';
            };
            
            reader.onerror = function(error) {
                console.error('Error reading file:', error);
            }
            
            reader.readAsDataURL(file);
        }
    });
    
    input.click();
});

    // Change Room Image
    function changeRoomImage(imageUrl, event) {
        const mainRoomImage = document.getElementById('mainRoomImage');
        const clickedImage = event.target;
        const currentMainImage = mainRoomImage.src;
        mainRoomImage.src = imageUrl;
        clickedImage.src = currentMainImage;
    }
    
    // Toggle Toolbox
    document.getElementById('editButton').addEventListener('click', function() {
        const toolbox = document.getElementById('toolbox');
        toolbox.style.display = toolbox.style.display === 'none' ? 'block' : 'none';
    });
    
    // Size Slider
    document.getElementById('sizeSlider').addEventListener('input', function() {
        const newSize = this.value;
        const uploadedImage = document.getElementById('uploadedImage');
        uploadedImage.style.width = newSize + '%';
        document.getElementById('sizeValue').textContent = newSize + '%';
    });
    
    // Lighting Slider
    document.getElementById('lightingSlider').addEventListener('input', function() {
        const brightness = this.value;
        document.getElementById('uploadedImage').style.filter = `brightness(${brightness}%)`;
        document.getElementById('lightingValue').textContent = brightness + '%';
    });
    
  // Rotate Button
document.getElementById('rotateButton').addEventListener('click', function() {
const uploadedImage = document.getElementById('uploadedImage');
// Extract the current rotation angle or initialize to 0 if not set
const currentTransform = uploadedImage.style.transform || 'rotate(0deg)';
const match = currentTransform.match(/rotate\((-?\d+)deg\)/);
const currentRotation = match ? parseInt(match[1], 10) : 0;
const newRotation = currentRotation + 90; // Rotate by 90 degrees

// Preserve existing transforms like translation
const translate = currentTransform.replace(/rotate\(-?\d+deg\)/, '').trim();
uploadedImage.style.transform = `${translate} rotate(${newRotation}deg)`;
});

    // Reset Button
    document.getElementById('resetButton').addEventListener('click', function() {
        const uploadedImage = document.getElementById('uploadedImage');
        uploadedImage.src = '';
        uploadedImage.style.display = 'none';
        
        // Reset slider values
        document.getElementById('sizeSlider').value = 100;
        document.getElementById('sizeValue').textContent = '100%';
        
        document.getElementById('lightingSlider').value = 50;
        document.getElementById('lightingValue').textContent = '50%';
    });
    
    // Draggable Image
    const uploadedImage = document.getElementById('uploadedImage');
    uploadedImage.addEventListener('mousedown', function(e) {
        // Prevent image dragging default behavior
        e.preventDefault();
        
        const rect = uploadedImage.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
    
        function onMouseMove(event) {
            const x = event.clientX - offsetX;
            const y = event.clientY - offsetY;
    
            const roomContainer = document.getElementById('room-container');
            const roomRect = roomContainer.getBoundingClientRect();
            const imgWidth = uploadedImage.width;
            const imgHeight = uploadedImage.height;
    
            const left = Math.min(Math.max(0, x), roomRect.width - imgWidth);
            const top = Math.min(Math.max(0, y), roomRect.height - imgHeight);
    
            uploadedImage.style.left = `${left}px`;
            uploadedImage.style.top = `${top}px`;
            uploadedImage.style.position = 'absolute';
        }
    
        document.addEventListener('mousemove', onMouseMove);
    
        document.addEventListener('mouseup', function() {
            document.removeEventListener('mousemove', onMouseMove);
        });
    });
    
    // Save Button
    document.getElementById('saveButton').addEventListener('click', function() {
        const mainRoomImage = document.getElementById('mainRoomImage').src;
        const uploadedImage = document.getElementById('uploadedImage');
        const uploadedImageSrc = uploadedImage.src;
        
        // Check if an image is uploaded
        if (!uploadedImageSrc || uploadedImageSrc === '') {
            alert('Please upload an image first!');
            return;
        }
        
        const uploadedImageStyle = {
            top: uploadedImage.style.top || '0px',
            left: uploadedImage.style.left || '0px',
            width: uploadedImage.style.width || '100%',
            brightness: uploadedImage.style.filter || 'brightness(100%)',
            rotation: uploadedImage.style.transform || 'rotate(0deg)',
        };
    
        const saveData = {
            mainRoomImage: mainRoomImage,
            uploadedImage: uploadedImageSrc,
            style: uploadedImageStyle,
        };
    
        // In a real application, you would send this to a backend
        console.log('Save Data:', saveData);
        
        // Local storage fallback for demonstration
        try {
            localStorage.setItem('savedDesign', JSON.stringify(saveData));
            alert('Design saved successfully in local storage!');
        } catch (error) {
            console.error('Error saving design:', error);
            alert('Failed to save design. Please check console for details.');
        }
    });
    ['woodFrameColor', 'whiteFrameColor', 'blackFrameColor'].forEach(colorId => {
        document.getElementById(colorId).addEventListener('click', function() {
            const frameColor = this.style.backgroundColor;
            const frameOverlay = document.getElementById('frameOverlay');
            const frameWidth = document.getElementById('frameWidthSlider').value;
            
            frameOverlay.style.border = `${frameWidth}px solid ${frameColor}`;
        });
    });

    // Frame Width Slider
    document.getElementById('frameWidthSlider').addEventListener('input', function() {
        const frameWidth = this.value;
        const frameOverlay = document.getElementById('frameOverlay');
        const currentFrameColor = frameOverlay.style.borderColor || '#8B4513';
        
        frameOverlay.style.border = `${frameWidth}px solid ${currentFrameColor}`;
        document.getElementById('frameWidthValue').textContent = frameWidth + 'px';
    });
        
