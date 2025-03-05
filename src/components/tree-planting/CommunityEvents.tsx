
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, MapPin, Clock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const CommunityEvents = () => {
  const [filter, setFilter] = React.useState("all");
  
  // Mock data for community events
  const events = [
    {
      id: 1,
      title: "City Park Restoration",
      date: "2023-10-15",
      time: "9:00 AM - 12:00 PM",
      location: "Riverside Park",
      description: "Help plant 50 native trees to restore the park's eastern section. Tools and saplings provided.",
      organizer: "City Parks Department",
      status: "upcoming",
      participants: 18,
      maxParticipants: 30
    },
    {
      id: 2,
      title: "School Greening Project",
      date: "2023-10-28",
      time: "10:00 AM - 2:00 PM",
      location: "Lincoln Elementary School",
      description: "Plant shade trees around the playground to provide cooling and improve air quality for students.",
      organizer: "PTA & Environmental Club",
      status: "upcoming",
      participants: 12,
      maxParticipants: 15
    },
    {
      id: 3,
      title: "Neighborhood Tree Planting",
      date: "2023-11-05",
      time: "8:30 AM - 1:00 PM",
      location: "Oak Street Community Garden",
      description: "Community-led initiative to add fruit and shade trees to our neighborhood streets and shared spaces.",
      organizer: "Oak Street Community Association",
      status: "upcoming",
      participants: 8,
      maxParticipants: 20
    },
    {
      id: 4,
      title: "Watershed Restoration",
      date: "2023-09-23",
      time: "9:00 AM - 3:00 PM",
      location: "Cedar Creek Nature Preserve",
      description: "Reforestation project focusing on riparian zones to improve water quality and prevent erosion.",
      organizer: "Watershed Alliance",
      status: "past",
      participants: 25,
      maxParticipants: 25
    }
  ];
  
  const filteredEvents = filter === "all" 
    ? events 
    : events.filter(event => event.status === filter);
  
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl flex items-center justify-between">
            <div className="flex items-center">
              <Users className="mr-2 h-5 w-5 text-primary" />
              Community Planting Events
            </div>
            
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[160px]">
                <SelectValue placeholder="Filter events" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Events</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="past">Past Events</SelectItem>
              </SelectContent>
            </Select>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            Join tree planting events in your community to make a bigger impact. 
            These events are great opportunities to learn proper planting techniques 
            and connect with like-minded individuals.
          </p>
          
          {filteredEvents.length > 0 ? (
            <div className="space-y-6">
              {filteredEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden border border-border/40">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-lg">{event.title}</h3>
                          <Badge variant={event.status === "upcoming" ? "default" : "secondary"}>
                            {event.status === "upcoming" ? "Upcoming" : "Past"}
                          </Badge>
                        </div>
                        <p className="text-sm text-foreground/70">Organized by {event.organizer}</p>
                      </div>
                      
                      {event.status === "upcoming" && (
                        <Button>Sign Up</Button>
                      )}
                    </div>
                    
                    <p className="mb-4">{event.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-primary mr-2" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-orange-500 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-red-500 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm">
                          {event.participants} of {event.maxParticipants} spots filled
                        </span>
                      </div>
                      <div className="w-full sm:w-40 bg-gray-100 rounded-full h-2.5">
                        <div 
                          className="bg-primary h-2.5 rounded-full" 
                          style={{ width: `${(event.participants / event.maxParticipants) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg border border-dashed">
              <Users className="h-12 w-12 text-primary/30 mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">No events found</h3>
              <p className="text-sm text-foreground/70 mb-4">
                There are no {filter !== "all" && filter} events to display at this time.
              </p>
              {filter !== "all" && (
                <Button variant="outline" onClick={() => setFilter("all")}>
                  View All Events
                </Button>
              )}
            </div>
          )}
          
          <div className="mt-8 p-4 bg-primary/5 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <Info className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Want to organize your own tree planting event?</h3>
                <p className="text-sm text-foreground/70 mb-4">
                  We can help you coordinate with local nurseries, find volunteers, and navigate permits.
                </p>
                <Button variant="outline" size="sm">Get Started</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommunityEvents;
