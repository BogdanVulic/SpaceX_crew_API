
export const Member = (member, launches) => {
    const divWrapper = document.querySelector('#wrapper')
    const divMember = document.createElement('div');
    divMember.className = 'div-member';
    divMember.innerHTML = `
        <img class="member-image" src="${member.image}">
        <p class="member-name">Name: ${member.name}</p>
        <p class="member-agency">Agency: ${member.agency}</p>
    `
    const pLaunches = document.createElement('p');
    pLaunches.className = 'member-launches';

    let details = launches.find(launch => launch.id == member.launches[0])

    pLaunches.textContent = member.launches[0] ? `Launches: ${details.name}` : `No launches.`
    
    const pDetails = document.createElement('p');
    pDetails.className = 'launches-details';

    pDetails.textContent = details ? details.details : '';
        
    pDetails.style.display = 'none';

    pLaunches.addEventListener('click', () => {
        pDetails.style.display == 'none' ?
            pDetails.style.display = 'inline' : 
            pDetails.style.display = 'none'
        })

    divMember.append(pLaunches,pDetails);
    divWrapper.append(divMember);
}