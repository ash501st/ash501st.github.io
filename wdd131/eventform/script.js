const typeSelect = document.getElementById('type');
const conditionalGroup = document.getElementById('conditionalGroup');
const conditionalLabel = document.getElementById('conditionalLabel');
const conditionalInput = document.getElementById('conditionalInput');
const ticketForm = document.getElementById('ticketForm');
const messageBox = document.getElementById('messageBox');

typeSelect.addEventListener('change', function() {
    const selectedValue = typeSelect.value;

    if (selectedValue === 'student') {
        conditionalGroup.classList.remove('hidden');
        conditionalLabel.textContent = 'Student I#';
        conditionalInput.placeholder = 'e.g. 123456789';
        conditionalInput.required = true;
    } else if (selectedValue === 'guest') {
        conditionalGroup.classList.remove('hidden');
        conditionalLabel.textContent = 'Access Code';
        conditionalInput.placeholder = 'Enter Event Code';
        conditionalInput.required = true;
    } else {
        conditionalGroup.classList.add('hidden');
        conditionalInput.required = false;
        conditionalInput.value = '';
    }
});

ticketForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    messageBox.innerHTML = '';
    let errors = [];

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const type = typeSelect.value;
    const eventDateValue = document.getElementById('eventDate').value;
    const conditionalValue = conditionalInput.value.trim();

    const selectedDate = new Date(eventDateValue + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
        errors.push("The event date must be a future date.");
    }

    if (type === 'student') {
        const digitsPattern = /^\d{9}$/;
        if (!digitsPattern.test(conditionalValue)) {
            errors.push("Student I# must be 9 digits.");
        }
    } else if (type === 'guest') {
        if (conditionalValue !== 'EVENT131') {
            errors.push("Use code 'EVENT131'.");
        }
    }

    if (errors.length > 0) {
        messageBox.innerHTML = `
            <div class="error">
                ${errors.join('<br>')}
            </div>`;
    } else {
        messageBox.innerHTML = `
            <div class="success">
                <h3>Ticket Created</h3>
                <p>${firstName} ${lastName}</p>
                <p>${type.charAt(0).toUpperCase() + type.slice(1)}</p>
                <p>${eventDateValue}</p>
            </div>
        `;
        ticketForm.reset();
        conditionalGroup.classList.add('hidden');
    }
});