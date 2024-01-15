import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { useAuthStore } from "../store/auth"
import PersonalForm from '../components/PersonalForm';
import ShoppingList from '../components/ShoppingList';

const navigation = [
  { name: 'Datos Personales', info:"info1" },
  { name: 'Configurar Cuenta', href: '#', info:"info2" },
  { name: 'Compras', href: '#', info:"info3" },
  { name: 'Direcciones', href: '#', info:"info4" },
  { name: 'Medios de Pago', href: '#', info:"info5" },
  // { name: 'Company', href: '#' },
]

function ProfilePage() {
  
  const logout = useAuthStore(state => state.logout)
  const user = useAuthStore(state => state.user)
  const navigate = useNavigate()

  const [activeInfo, setActiveInfo] = useState<string | null>(null);

  const showInfo = (infoId: string) => {
    setActiveInfo(infoId);
  };
  return (
    <div className="flex h-screen mt-20 row">     
        <div className="w-64 bg-indigo-600 text-white grid grid-flow-row-dense grid-rows-3">
          {/* Barra lateral */}
          <div className="mt-6 flow-root">
            <div className="ml-10 col-span-2">
              <div className="-my-6 divide-y divide-white-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                      <a
                        key={item.name}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white-900 hover:bg-gray-50 hover:text-black"
                        onClick={() => showInfo(item.info) }
                      >
                        {item.name}
                      </a>
                    ))} 
                </div>
              </div>        
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white-200 border-t-2 border-gray-200">
          {/* Contenido principal */}
          <div className="h-screen bg-white-100">
            <div className='bg-white rounded p-4 shadow'>
              <h1 className='ml-6'>
                Hola, {user.name}
              </h1>
            </div>
            <div className='mt-6 ml-6' id="info-container">
              {activeInfo === 'info1' && 
                <div className="w-ful mr-10">
                  <PersonalForm />
                </div>
              }
              {activeInfo === 'info2' && <div className="info">Información 2</div>}
              
              {activeInfo === 'info3' &&
                <div className="w-full mr-10">
                  <ShoppingList/>
                </div>}
              {activeInfo === 'info4' && <div className="info">Información 4</div>}
              {activeInfo === 'info5' && <div className="info">Información 5</div>}
            </div>
          </div>
        </div>
    </div>
        
  )
}

export default ProfilePage