const Group = ({ groupInfo }) => {
    // console.log('rop', groupInfo)
    return (
        <section>
            <p>{groupInfo.name}</p>
            <span>{groupInfo.username}</span>
        </section>
    )
}

export default Group;