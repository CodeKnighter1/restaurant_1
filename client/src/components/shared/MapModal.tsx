import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const MapModal = ({ open, onClose }) => {
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (open) {
      setShowMap(true);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[500px]">
        <DialogHeader>
          <DialogTitle>Restoranlar joylashuvi</DialogTitle>
        </DialogHeader>
        <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-xl overflow-hidden">
          {showMap ? (
            <iframe
              title="Google Map"
              className="w-full h-full rounded-xl"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47933.53611235692!2d69.20458227021723!3d41.299495774345926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b38c77e817f%3A0xe17a4a1debc68f27!2sTashkent!5e0!3m2!1sen!2s!4v1685000000000!5m2!1sen!2s"
            ></iframe>
          ) : (
            <p className="text-gray-500">Xarita yuklanmoqda...</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MapModal;