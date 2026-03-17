import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function GameList(){

  const [games,setGames] = useState([])

  useEffect(()=>{

    fetch("/api/roms")
      .then(res=>res.json())
      .then(data=>setGames(data))

  },[])

  return(

    <div >

      {/* LOGO */}
         <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0px",
          marginBottom: "0px"
        }}
      >
        <img src={"/icone.gif"} style={{ width: "150px" }} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "0px",
          marginBottom: "30px"
        }}
      >
        <img src={"/logo-site-panther3.png"} style={{ width: "500px" }} />
      </div>

      <p className="neon-text">
        Escolha um jogo, aperte play e divirta-se!
      </p>

      {/* GRID DE JOGOS */}
      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill, 250px)",
        gap:"15px",
        justifyContent:"center",
        padding:"40px"
      }}>

        {games.map(game=>{

          const name = game.replace(/\.[^/.]+$/, "")
          const cover = `/covers/${name}.png`

          return(

            <Link
              key={game}
              to={`/play?rom=${game}`}
              style={{textDecoration:"none",color:"white"}}
            >

              <div className="game-card" style={{ textAlign: "center" }}>

                <img
                  src={cover}
                  style={{
                    width:"200px",
                    borderRadius:"10px",
                    boxShadow:"0 5px 15px rgba(0,0,0,0.5)"
                  }}
                />

                <p style={{marginTop:"10px"}}>
                  {name}
                </p>

              </div>

            </Link>

          )

        })}




      </div>



          {/* Rodapé */}

        
            <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "30px"
        }}
      >
        <img src={"/dk.gif"} style={{ width: "250px" }} />
      </div>


              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  justifyContent: "center",
                  marginTop: "30px",
                  marginBottom: "30px",
                  fontSize: "15px"
                }}
              >
                <span>Site desenvolvido por</span>
        
                <img
                  src={
                    "/icone-panther.png"
                  }
                  style={{ width: "35px", height: "24px" }}
                />
        
                <a
                  href="https://github.com/PantherDesign"
                  style={{ color: "#e924d9", textDecoration: "none" }}
                  target="_blank"
                >
                  Panther
                </a> </div>


                
   


    </div>

  )

}