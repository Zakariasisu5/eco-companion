
import React, { useEffect, useState } from 'react';
import { Calendar, Clock, Trash2, Info, Leaf, AlertTriangle, BellRing } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AddReminderDialog } from './AddReminderDialog';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { format } from 'date-fns';
import { useAuth } from '@/context/AuthContext';

const scheduleItems = [
  {
    type: 'General Waste',
    day: 'Monday',
    time: '8:00 AM',
    icon: Trash2,
    color: 'text-gray-600 bg-gray-100'
  },
  {
    type: 'Recycling',
    day: 'Thursday',
    time: '9:00 AM',
    icon: Info,
    color: 'text-blue-600 bg-blue-100'
  },
  {
    type: 'Green Waste',
    day: 'First Tuesday',
    time: '8:00 AM',
    icon: Leaf,
    color: 'text-green-600 bg-green-100'
  },
  {
    type: 'Hazardous Waste',
    day: 'Last Saturday',
    time: '10:00 AM - 2:00 PM',
    icon: AlertTriangle,
    color: 'text-orange-600 bg-orange-100'
  }
];

const ScheduleTab = () => {
  const [customReminders, setCustomReminders] = useState<any[]>([]);
  const { toast } = useToast();
  const { user } = useAuth();

  const fetchReminders = async () => {
    if (!user) {
      return;
    }

    const { data, error } = await supabase
      .from('custom_reminders')
      .select('*')
      .eq('user_id', user.id)
      .order('reminder_date', { ascending: true });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch reminders",
        variant: "destructive",
      });
      return;
    }

    setCustomReminders(data || []);
  };

  useEffect(() => {
    fetchReminders();
  }, [user]);

  const handleDeleteReminder = async (id: string) => {
    try {
      const { error } = await supabase
        .from('custom_reminders')
        .delete()
        .eq('id', id);

      if (error) {
        toast({
          title: "Error",
          description: "Failed to delete reminder",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Success",
        description: "Reminder deleted successfully",
      });
      fetchReminders();
    } catch (error) {
      console.error("Error deleting reminder:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred while deleting the reminder",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Calendar className="mr-2 h-5 w-5 text-primary" />
            Collection Schedule
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {scheduleItems.map((item, index) => (
            <div key={index} className="flex items-center p-3 border rounded-lg">
              <div className={`p-2 rounded-full ${item.color} mr-4`}>
                <item.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{item.type}</h3>
                <div className="flex items-center text-sm text-foreground/70">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  <span className="mr-3">{item.day}</span>
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{item.time}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Set Reminder
              </Button>
            </div>
          ))}
          
          {user ? (
            <>
              {customReminders.map((reminder) => (
                <div key={reminder.id} className="flex items-center p-3 border rounded-lg">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mr-4">
                    <BellRing className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{reminder.title}</h3>
                    {reminder.description && (
                      <p className="text-sm text-foreground/70">{reminder.description}</p>
                    )}
                    <div className="flex items-center text-sm text-foreground/70 mt-1">
                      <Calendar className="h-3.5 w-3.5 mr-1" />
                      <span>{format(new Date(reminder.reminder_date), 'PPP')}</span>
                      <Clock className="h-3.5 w-3.5 ml-3 mr-1" />
                      <span>{format(new Date(reminder.reminder_date), 'p')}</span>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleDeleteReminder(reminder.id)}
                    className="text-destructive hover:text-destructive/90"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
              
              <AddReminderDialog onReminderAdded={fetchReminders} />
            </>
          ) : (
            <div className="text-center p-4 border rounded-lg border-dashed">
              <p className="text-muted-foreground">
                Log in to add and manage custom reminders
              </p>
            </div>
          )}
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Upcoming Collections</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start">
              <div className="bg-white p-2 rounded-md shadow-sm mr-4">
                <Calendar className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">Next Collection: Recycling</h3>
                <p className="text-sm text-foreground/70">Thursday, 9:00 AM</p>
                <div className="mt-2 text-sm">
                  <span className="font-medium">Reminder:</span> Place bins out by 8:00 PM the night before.
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ScheduleTab;
