import MaintenanceInvoices from '@/components/MaintenanceInvoices'
export const metadata = {
  title: {
    default: "Maintenance Invoices",
    template: "%s",
  },
  description: "Efficiently create, manage, and track maintenance service invoices. Ideal for facilities, equipment, or property maintenance billing with accurate records and streamlined workflows.",
};

const page = () => {
  return (
    <MaintenanceInvoices />
  )
}

export default page