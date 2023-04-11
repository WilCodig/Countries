import styles from "./Paginado.module.css"

const Paginado=(props)=>{

    const allPage=[];
    for(let i=1;i<= props.miximoPage;i++){ 
        allPage.push(i);
    };

    return(
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                {allPage && allPage.map(n=>(
                    <li className={styles.li}>
                        <a onClick={()=>props.paginado(n)}>{n}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Paginado;