

export function fetchNotifications() {
    fetch('http://4.224.186.213/evaluation-service/notifications', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data));  
}
