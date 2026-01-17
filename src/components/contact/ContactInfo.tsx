import React from 'react'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

const contactDetails = [
  {
    icon: HiMail,
    title: 'Email',
    content: 'admanpowerenterprises@gmail.com',
  },
  {
    icon: HiPhone,
    title: 'Phone',
    content: '+91 9899991560',
    content2: '+91 9899991560',
  },
  {
    icon: HiLocationMarker,
    title: 'Address',
    content: 'OFFICE NO. A-74, DEFENCE COLONY, ',
    content2: 'MAIN ROAD BHOPURA,SAHIBABAD, ',
    content3: 'GHAZIABAD, UP-201005',
  },
]

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl border p-8 space-y-6 max-w-2xl">
      <h3 className="text-2xl font-bold text-neutral-900 mb-4 text-center">
        Contact <span className="text-primary-600">Information</span>
      </h3>

      {contactDetails.map((detail, index) => {
        const Icon = detail.icon
        return (
          <div
            key={index}
            className="grid grid-cols-12 items-start gap-4 p-4 rounded-xl bg-neutral-50 hover:bg-neutral-100 transition shadow-sm border"
          >
            {/* Label + Icon */}
            <div className="col-span-3 flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <span className="p-2 rounded-lg bg-primary-100 text-primary-600">
                <Icon className="w-5 h-5" />
              </span>
              {detail.title}
            </div>

            {/* Value */}
            <div className="col-span-9 text-sm text-neutral-700 leading-relaxed">
              <p>{detail.content}</p>
              {detail.content2 && (
                <p className="mt-1 text-neutral-500">{detail.content2}</p>
              )}
              {detail.content3 && (
                <p className="mt-1 text-neutral-500">{detail.content3}</p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ContactInfo
