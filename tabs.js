// Function to show the corresponding content when a tab is clicked
function showTab(tabId) {
    // Hide all tab content
    const allTabs = document.querySelectorAll('.tab-content');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');

    // Remove active class from all tab buttons
    const allTabButtons = document.querySelectorAll('.tab-button');
    allTabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Add active class to the clicked tab button
    const selectedButton = Array.from(allTabButtons).find(button => button.textContent === tabId.replace('tab', 'Tab '));
    selectedButton.classList.add('active');
}

// Default to showing Tab 1
document.addEventListener('DOMContentLoaded', () => {
    showTab('tab1');
});
