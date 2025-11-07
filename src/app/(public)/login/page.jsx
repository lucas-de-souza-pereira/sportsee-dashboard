import Image from "next/image"
import Link from "next/link"


export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[.40fr_.60fr]">
      <section className="relative flex flex-col items-center justify-center" 
      aria-labelledby="login-title">

        <div className="absolute left-6 top-6">
          <span>logo</span>
        </div>

        <div className="bg-foreground p-10 rounded-md flex flex-col gap-10">
          <h1 className="typo-xl text-primary">Transformez<br/>vos stats en résultats</h1>

          <form className="flex flex-col gap-6">
            <fieldset className="typo-lg">Se connecter</fieldset>

            <div className="flex flex-col">
            <label className="typo-sm text-tertiary" htmlFor="email">Adresse email</label>
            <input id="email" name="email" type="email" required 
            className="border-[0.5px] border-tertiary rounded-sm h-14 mt-2 cursor-pointer hover:border-primary focus:border-none"/>
            </div>

            <div className="flex flex-col">
            <label className="typo-sm text-tertiary" htmlFor="password">Adresse email</label>
            <input id="password" name="password" type="password" required 
            className="border-[0.5px] border-tertiary rounded-sm h-14 mt-2 cursor-pointer hover:border-primary focus:border-none"/>
            </div>

            <button className="btn btn-primary">Se connecter</button>
          </form>

          <Link href={"/"}><p className="typo-sm">Mot de passe oublié ?</p></Link>

        </div>
      </section>

      <section className="relative hidden lg:block">

        <Image
          src="/login-picture.jpg"
          alt="image course à pied"
          fill
          style={{ objectFit: "cover" }}
          sizes="(min-width:1024px) 50vw, 100vw"
          priority
          />

        <span className="absolute right-6 bottom-7.5 bg-foreground rounded-[50px] text-primary typo-xs p-4">Analysez vos performances en un clin d’œil, <br/> suivez vos progrès et atteignez vos objectifs.</span>


      </section >


    </div>
  )
}