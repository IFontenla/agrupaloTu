export function createRandomGroups(users, personsInGroup) {
    const usersCopy = [...users];
    const totalGroups = Math.floor(usersCopy.length / personsInGroup)
    const groups = []
    for(let i=0;i<totalGroups;i++) {
        let group = []
        for(let j=0;j<personsInGroup;j++) {
            const randomIndex = Math.floor(Math.random()*usersCopy.length)
            const randomUser = usersCopy[randomIndex]
            group.push(randomUser)
            usersCopy.splice(randomIndex,1)
        }
        groups.push(group)
    }
    return {
        inGroups: groups,
        noGroups: usersCopy,
    }
}