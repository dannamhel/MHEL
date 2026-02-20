function login() {
  const email = $("#email").val().trim();
  const password = $("#password").val().trim();

  if (!email || !password) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops!',
      text: 'Please fill up both email and password '
    });
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    Swal.fire({
      icon: 'error',
      title: 'Invalid Email',
      text: 'Please enter a valid email address.'
    });
    return;
  }

  Swal.fire({
    icon: 'success',
    title: 'Login Successful!',
    text: 'Redirecting to Home...',
    timer: 2000,
    showConfirmButton: false
  }).then(() => {
    window.location.href = "index.html";
  });
}

          
$(document).ready(function() {

  $('#addBtn').on('click', function() {

    const firstName = $('#fn').val().trim();
    const middleName = $('#mn').val().trim() || "N/A";
    const lastName = $('#ln').val().trim();
    const age = $('#age').val().trim();
    const email = $('#em').val().trim();

    if (!firstName || !lastName || !age || !email) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Fields',
        text: 'Please fill in all required fields marked with *'
      });
      return;
    }

if (!/^[1-9][0-9]*$/.test(age)) {
  Swal.fire({
    icon: 'error',
    title: 'Invalid Age',
    text: 'Age must be a positive number.'
  });
  return;
}

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.'
      });
      return;
    }

    let duplicate = false;
    $('#qTable tbody tr').each(function() {
      if ($(this).find('td:eq(4)').text() === email) {
        duplicate = true;
      }
    });

    if (duplicate) {
      Swal.fire({
        icon: 'warning',
        title: 'Duplicate Entry',
        text: 'This email is already marked present.'
      });
      return;
    }

    const newRow = `
      <tr>
        <td>${firstName}</td>
        <td>${middleName}</td>
        <td>${lastName}</td>
        <td>${age}</td>
        <td>${email}</td>
      </tr>
    `;

    $('#qTable tbody').append(newRow);

    Swal.fire({
      icon: 'success',
      title: 'Added!',
      text: 'Attendance has been recorded.',
      timer: 1500,
      showConfirmButton: false
    });

    $('#fn, #mn, #ln, #age, #em').val('');
  });

});
