import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface AvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  artistName: string;
}

export const AvailabilityModal = ({ isOpen, onClose, artistName }: AvailabilityModalProps) => {
  const [date, setDate] = useState<Date>();
  const [eventType, setEventType] = useState("");
  const { toast } = useToast();

  const handleCheckAvailability = () => {
    if (!date || !eventType) {
      toast({
        title: "Missing Information",
        description: "Please select a date and enter event type",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Availability Request Sent!",
      description: `We'll check ${artistName}'s availability for ${date.toLocaleDateString()} and get back to you soon.`,
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Check Availability for {artistName}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="space-y-2">
            <Label>Select Event Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date()}
              className="rounded-md border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="eventType">Event Type</Label>
            <Input
              id="eventType"
              placeholder="e.g., Wedding, Corporate Event, Birthday"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
            />
          </div>

          <div className="flex gap-3">
            <Button onClick={handleCheckAvailability} className="flex-1">
              Check Availability
            </Button>
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
