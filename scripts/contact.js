document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        alert('Message submitted'); 

        // You can also use a more user-friendly notification library like SweetAlert2
        // Swal.fire('Message submitted');

        // Optional: Reset the form
        // event.target.reset();
    });
})