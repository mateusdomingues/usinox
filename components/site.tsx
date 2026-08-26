'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Menu, X, MessageCircle, ChevronRight, Factory, Settings2, Cog, Wrench, Boxes, CheckCircle2 } from 'lucide-react'
import { company, imageUrls } from '@/data/company'

export function Header() {
  const [open, setOpen] = useState(false)
  const links = [['Empresa','/empresa'],['Serviços','/servicos'],['Projetos','/projetos'],['Contato','/contato']]
  return <header className="site-header"><Link href="/" className="logo" onClick={() => setOpen(false)}><Image className="logo-image" src="/images/usinox-logo.png" alt="Usinox — Usinagem de máquinas e equipamentos industrial" width={238} height={205} priority /></Link><nav className="desktop-nav">{links.map(([label,href]) => <Link key={href} href={href}>{label}</Link>)}<Link className="nav-cta" href="/contato">Solicitar orçamento <ArrowUpRight size={15}/></Link></nav><button className="menu-toggle" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>{open && <div className="mobile-menu">{links.map(([label,href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={18}/></Link>)}<Link className="nav-cta" href="/contato" onClick={() => setOpen(false)}>Solicitar orçamento <ArrowUpRight size={15}/></Link></div>}</header>
}

export function Footer() { return <footer><div><Link href="/" className="logo"><Image className="logo-image" src="/images/usinox-logo.png" alt="Usinox — Usinagem de máquinas e equipamentos industrial" width={238} height={205} /></Link><p className="footer-copy">Precisão que move a indústria.</p></div><div className="footer-links"><div><b>Navegação</b><Link href="/empresa">Empresa</Link><Link href="/servicos">Serviços</Link><Link href="/projetos">Projetos</Link></div><div><b>Fale conosco</b><a href={`https://wa.me/${company.whatsapp}`}>WhatsApp</a><a href={`mailto:${company.email}`}>{company.email}</a><span>{company.city}</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Usinox Usinagem</span><Link href="/politica-de-privacidade">Privacidade</Link></div></footer> }

export function WhatsAppButton() { return <a className="whatsapp-float" href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Olá, gostaria de solicitar um orçamento.')}`} target="_blank" rel="noreferrer" aria-label="Falar com a Usinox pelo WhatsApp"><MessageCircle size={22}/><span>Fale com a gente</span></a> }

const services = [{icon: Cog,title:'Engrenagens',text:'Dentes retos, helicoidais e componentes sob medida para transmissão e movimento.'},{icon: Settings2,title:'Usinagem de precisão',text:'Peças técnicas com atenção rigorosa a medidas, acabamento e aplicação.'},{icon: Boxes,title:'Nylon usinado',text:'Rodas, roletes e componentes resistentes para ambientes industriais.'},{icon: Wrench,title:'Manutenção industrial',text:'Recuperação, adaptação e fabricação para manter seu equipamento em movimento.'}]

export function ServiceGrid() { return <div className="service-grid">{services.map(({icon:Icon,title,text}) => <Link href={`/servicos/${title.toLowerCase().replaceAll(' ','-').replace('ç','c')}`} className="service-card" key={title}><span className="service-icon"><Icon size={22}/></span><h3>{title}</h3><p>{text}</p><span className="card-link">Conheça <ArrowUpRight size={16}/></span></Link>)}</div> }

export function ContactForm() { const [sent,setSent]=useState(false); return <form className="contact-form" onSubmit={e=>{e.preventDefault(); const f=new FormData(e.currentTarget); const msg=`Olá, gostaria de solicitar um orçamento.\n\nNome: ${f.get('name')}\nEmpresa: ${f.get('company')}\nServiço: ${f.get('service')}\nMensagem: ${f.get('message')}`; window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(msg)}`,'_blank');setSent(true)}}><div className="form-row"><label>Seu nome<input required name="name" placeholder="Como podemos chamar você?"/></label><label>Empresa<input name="company" placeholder="Nome da empresa"/></label></div><label>O que você precisa?<select name="service" defaultValue=""><option value="" disabled>Selecione um serviço</option><option>Engrenagens</option><option>Usinagem de precisão</option><option>Nylon usinado</option><option>Manutenção industrial</option><option>Projeto personalizado</option></select></label><label>Conte um pouco sobre o projeto<textarea required name="message" rows={5} placeholder="Dimensões, material, quantidade ou aplicação..."></textarea></label><button className="button button-primary" type="submit">Enviar pelo WhatsApp <ArrowUpRight size={17}/></button>{sent && <p className="success"><CheckCircle2 size={16}/> Mensagem preparada. O WhatsApp será aberto em uma nova aba.</p>}</form> }

export function EditorialImage({type='gears',alt='Componentes usinados Usinox',className=''}) { return <div className={`editorial-image ${className}`}><Image src={imageUrls[type as keyof typeof imageUrls]} alt={alt} fill priority={type === 'gears'} sizes="(max-width: 768px) 100vw, 50vw" style={{objectFit:'cover', objectPosition:'center'}}/></div> }

export function SectionLabel({children}:{children:React.ReactNode}) { return <div className="section-label"><span></span>{children}</div> }
export { company }
