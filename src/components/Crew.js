import { Member } from './Member';

export const Crew = (crew, launches) => {
    console.log(crew)
    crew.forEach(member => {
        Member(member, launches);
    });
}