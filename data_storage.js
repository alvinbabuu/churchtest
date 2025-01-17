document.getElementById('detailsForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get values from form fields
    var ward_name = document.getElementById('ward_name').value;
    var head_name = document.getElementById('head_name').value;
    var name = document.getElementById('name').value;
    var relationship = document.getElementById('relationship').value;
    var address = document.getElementById('address').value;
    var dob = document.getElementById('dob').value;
    var education = document.getElementById('education').value;
    var job = document.getElementById('job').value;
    var blood_group = document.getElementById('blood_group').value;
    var remarks = document.getElementById('remarks').value;
    var photo = document.getElementById('photo').files[0];
    var marriage_date = document.getElementById('marriage_date').value;

    // Save to localStorage (with JSON format)
    var familyData = JSON.parse(localStorage.getItem('familyData')) || [];
    var familyMember = {
        ward_name: ward_name,
        head_name: head_name,
        name: name,
        relationship: relationship,
        address: address,
        dob: dob,
        education: education,
        job: job,
        blood_group: blood_group,
        remarks: remarks,
        photo: photo.name, // Save photo name (we can't save the actual photo in localStorage)
        marriage_date: marriage_date
    };

    familyData.push(familyMember);
    localStorage.setItem('familyData', JSON.stringify(familyData));

    alert('Details saved successfully!');
    window.location.href = 'index.html'; // Redirect to homepage
});

function enterAnother() {
    document.getElementById('detailsForm').reset(); // Reset form fields
}
