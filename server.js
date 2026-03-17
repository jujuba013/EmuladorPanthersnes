import express from "express"
import fs from "fs"
import path from "path"
import cors from "cors"

const app = express()

app.use(cors())

const __dirname = new URL('.', import.meta.url).pathname

const romPath = path.join(process.cwd(), "public/roms")

// API para listar roms
app.get("/api/roms", (req, res) => {

  fs.readdir(romPath, (err, files) => {

    if (err) {
      return res.status(500).json({ error: "Erro lendo ROMs" })
    }

    const roms = files.filter(file =>
      file.endsWith(".sfc") ||
      file.endsWith(".smc") ||
      file.endsWith(".nes") ||
      file.endsWith(".gba")
    )

    res.json(roms)

  })

})

// servir roms
app.use("/roms", express.static(path.join(process.cwd(), "public/roms")))

// servir covers
app.use("/covers", express.static(path.join(process.cwd(), "public/covers")))

// servir build do React
app.use(express.static(path.join(process.cwd(), "dist")))

// fallback React Router
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist/index.html"))
})

const PORT = 3000

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})