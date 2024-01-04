import { ButtonText } from './ButtonText'

export function Header() {
  return (
    <div className="border-b border-zinc-700 bg-zinc-950 shadow-sm">
      <div className="mx-auto flex w-page items-center justify-end gap-8 p-6 smartphone:justify-between">
        <h1 className="hidden font-anton text-xl tracking-wide text-zinc-950 smartphone:block  dark:text-zinc-100">
          RocketMovies
        </h1>
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end">
            <span className="text-sm text-zinc-100">Diogo Kappaun</span>
            <ButtonText>sair</ButtonText>
          </div>
          <img
            src="https://github.com/diogo-kappaun.png"
            alt="Foto de Diogo"
            className="w-12 rounded-full border border-zinc-700"
          />
        </div>
      </div>
    </div>
  )
}