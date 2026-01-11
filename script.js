// Simple JavaScript for Spice Garden Restaurant Website
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Menu Filtering
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and add to clicked tab
            menuTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const category = this.getAttribute('data-category');
            
            // Show/hide menu items based on category
            menuItems.forEach(item => {
                if (category === 'all' || category === item.getAttribute('data-category')) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Simple Form Validation
    const reviewForm = document.querySelector('form[action="submit_review.php"]');
    
    if (reviewForm) {
        reviewForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = document.getElementById('name');
            const reviewInput = document.getElementById('review');
            
            // Simple validation
            if (!nameInput.value.trim() || !reviewInput.value.trim()) {
                alert('Please fill out all fields');
                return;
            }
            
            // Show success message
            alert('Thank you for your review!');
            reviewForm.reset();
        });
    }
    
    // Basic Gallery Lightbox
    const galleryImages = document.querySelectorAll('.gallery-item img');
    
    // Create lightbox elements if there are gallery images
    if (galleryImages.length > 0) {
        // Create lightbox container
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.cssText = 'display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 1000; justify-content: center; align-items: center;';
        
        // Create lightbox image
        const lightboxImg = document.createElement('img');
        lightboxImg.id = 'lightbox-img';
        lightboxImg.style.cssText = 'max-width: 90%; max-height: 80%; border: 2px solid white;';
        
        // Create close button
        const closeBtn = document.createElement('span');
        closeBtn.innerHTML = '&times;';
        closeBtn.style.cssText = 'position: absolute; top: 20px; right: 30px; color: white; font-size: 40px; cursor: pointer;';
        
        // Add elements to DOM
        lightbox.appendChild(lightboxImg);
        lightbox.appendChild(closeBtn);
        document.body.appendChild(lightbox);
        
        // Add click event to gallery images
        galleryImages.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                lightboxImg.src = this.src;
                lightbox.style.display = 'flex';
            });
        });
        
        // Close lightbox on button click
        closeBtn.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
        
        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }
});