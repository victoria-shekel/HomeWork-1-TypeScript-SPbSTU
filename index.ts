import {IUsersName, IUsersGender, IUsersArray, usersArray} from "./users";
import {IUsersAge, IUsersPosition, usersInfoArray} from "./userInfo";

interface IUsersFinal extends IUsersName, IUsersPosition, IUsersAge, IUsersGender {
}

function getUsersJobPositions(usersArray: IUsersArray[]) {
    const UsersJobPositions:IUsersFinal[] = [];
    usersArray.forEach(
        function (v,i) {
            const newUserJobPosition:IUsersFinal = {
                name: v.name,
                position: usersInfoArray[i].organization.position,
                age: usersInfoArray[i].age,
                gender: v.gender
            }
            UsersJobPositions.unshift(newUserJobPosition);
        }
    );
    return UsersJobPositions;
}

const usersPositions = getUsersJobPositions(usersArray);
console.log('userPositions', usersPositions);
