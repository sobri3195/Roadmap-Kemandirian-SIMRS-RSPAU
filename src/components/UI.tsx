import type {ReactNode} from 'react';
import type {Status} from '../types';
export const statusOptions:Status[]=['Belum dimulai','Berjalan','Tertunda','Selesai','Terverifikasi'];
export function Badge({value}:{value:string}){return <span className={`badge b-${value.toLowerCase().replaceAll(' ','-')}`}>{value}</span>}
export function Card({children,className=''}:{children:ReactNode,className?:string}){return <section className={`card ${className}`}>{children}</section>}
export function Empty({text='Belum ada data.'}:{text?:string}){return <div className="empty"><b>Belum ada catatan</b><span>{text}</span></div>}
export function Field({label,children}:{label:string,children:ReactNode}){return <label className="field"><span>{label}</span>{children}</label>}
export function Modal({title,onClose,children}:{title:string,onClose:()=>void,children:ReactNode}){return <div className="overlay" role="dialog" aria-modal="true" aria-label={title}><div className="modal"><header><h2>{title}</h2><button className="icon" onClick={onClose} aria-label="Tutup">×</button></header>{children}</div></div>}
export const fmt=(date:string,offset=0)=>{if(!date)return '—';const d=new Date(date+'T00:00:00');d.setDate(d.getDate()+offset);return new Intl.DateTimeFormat('id-ID',{day:'numeric',month:'short',year:'numeric'}).format(d)};
