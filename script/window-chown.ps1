$path = "C:\Users\blike\web-rainbow-server\postgres"  # 실제 경로 확인 필요
$user = "$env:USERNAME"

Write-Host "권한 설정 대상 경로: $path"
Write-Host "현재 사용자: $user"

if (-Not (Test-Path $path)) {
    Write-Error "❌ 경로가 존재하지 않습니다: $path"
    exit
}

$acl = Get-Acl $path
$rule = New-Object System.Security.AccessControl.FileSystemAccessRule($user, "FullControl", "ContainerInherit,ObjectInherit", "None", "Allow")
$acl.SetAccessRule($rule)

Write-Host "🔁 디렉토리 및 파일 권한 설정을 시작합니다..."

$items = Get-ChildItem -Path $path -Recurse -Force
$total = $items.Count
$index = 1

$items | ForEach-Object {
    Write-Host "[$index/$total] 처리 중: $($_.FullName)"
    try {
        Set-Acl -Path $_.FullName -AclObject $acl
    } catch {
        Write-Warning "⚠️ 권한 설정 실패: $($_.FullName)"
    }
    $index++
}

Write-Host "✅ 최상위 폴더 권한 설정: $path"
Set-Acl -Path $path -AclObject $acl

Write-Host "🎉 권한 변경 작업 완료!"
