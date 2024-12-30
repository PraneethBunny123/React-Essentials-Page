export default function Tabs({children, buttons, buttonsContainer}) {
    /*here we assign that to caps cause if we use it as lowe case, 
    react will search that as a built in identifier. 
    But we dont't have any built in identifier named buttonsContainer*/
    const ButtonsContainer = buttonsContainer

    return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}