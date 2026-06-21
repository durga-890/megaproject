// Local mock data repository containing academic subjects and mapped mentors
const mentorData = {
    'BSc - Computer Science': ['Teacher 1 (CS)', 'Teacher 2 (CS)'],
    'BSc - Data Science': ['Teacher 1 (DS)', 'Teacher 2 (DS)'],
    'BSc - Artificial Intelligence': ['Teacher 1 (AI)', 'Teacher 2 (AI)'],
    'BSc - Chemistry': ['Teacher 1 (Chem)', 'Teacher 2 (Chem)'],
    'BCA (Gen & Data Science)': ['Teacher 1 (BCA)', 'Teacher 2 (BCA)'],
    'BCom': ['Teacher 1 (BCom)', 'Teacher 2 (BCom)'],
    'BBA': ['Teacher 1 (BBA)', 'Teacher 2 (BBA)']
};

const mentorsSection = document.getElementById('mentorsSection');
const chatSection = document.getElementById('chatSection');
const welcomeMsg = document.getElementById('welcomeMsg');
const mentorsList = document.getElementById('mentorsList');

// Filter and dynamically display active faculty mentors assigned to selected course domain
function showMentors(subject) {
    mentorsSection.style.display = 'flex';
    chatSection.style.display = 'none';
    welcomeMsg.style.display = 'none';
    
    mentorsList.innerHTML = ''; 
    
    mentorData[subject].forEach(mentor => {
        const card = document.createElement('div');
        card.className = 'mentor-card';
        card.innerHTML = `
            <div class="mentor-avatar">${mentor.charAt(0)}</div>
            <div><strong>${mentor}</strong></div>
        `;
        card.onclick = () => openChat(mentor);
        mentorsList.appendChild(card);
    });
}

// Initialize workspace environment setup for sending ticket message to specified target mentor
function openChat(mentorName) {
    chatSection.style.display = 'flex';
    document.getElementById('activeMentorName').innerText = mentorName;
    document.getElementById('activeMentorAvatar').innerText = mentorName.charAt(0);
    document.getElementById('chatBody').innerHTML = ''; 
}

// Append student text content interface dynamically into messaging interface view
function sendDoubt() {
    const text = document.getElementById('doubtText').value;
    if(text.trim() === '') return;

    const chatBody = document.getElementById('chatBody');
    chatBody.innerHTML += `
        <div style="background-color: #e0f2fe; padding: 10px 15px; border-radius: 8px; align-self: flex-end; max-width: 70%;">
            <strong>You:</strong> <br> ${text}
        </div>
    `;
    document.getElementById('doubtText').value = ''; 
}