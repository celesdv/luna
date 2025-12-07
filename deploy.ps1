# Script de deploy para GitHub Pages
# Uso: .\deploy.ps1 -Token "tu_token_aqui"

param(
    [Parameter(Mandatory=$true)]
    [string]$Token
)

# Configurar el remoto con el token
git remote set-url origin "https://${Token}@github.com/celesdv/luna.git"

# Hacer el deploy
npm run deploy

# Restaurar el remoto sin el token (por seguridad)
git remote set-url origin "https://github.com/celesdv/luna.git"

Write-Host "`n¡Deploy completado! Tu app estará disponible en:" -ForegroundColor Green
Write-Host "https://celesdv.github.io/luna/" -ForegroundColor Cyan

