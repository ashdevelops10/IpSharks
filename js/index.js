//services know more
function showTeamMember(memberNumber) {
    document.getElementById("team-member-" + memberNumber).style.display = "block";
    document.getElementById("know-more-button-" + memberNumber).style.display = "none";
    document.getElementById("close-button-" + memberNumber).style.display = "block";
  }

  function hideTeamMember(memberNumber) {
    document.getElementById("team-member-" + memberNumber).style.display = "none";
    document.getElementById("know-more-button-" + memberNumber).style.display = "block";
    document.getElementById("close-button-" + memberNumber).style.display = "none";
  }