// AboutPageAdmin.tsx
import React, { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";

// Types
interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  company: string;
}

interface AboutPageContent {
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  ourStory: string;
  ourMission: string;
  ourVision: string;
  teamMembers: TeamMember[];
  testimonials: Testimonial[];
}

// Reusable Components
const TextInput = ({
  label,
  name,
  value,
  onChange,
  className = "",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) => (
  <div className={`mb-4 ${className}`}>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
);

const TextArea = ({
  label,
  value,
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}) => (
  <div className={`mb-4 ${className}`}>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <textarea
      value={value}
      onChange={onChange}
      rows={4}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
    />
  </div>
);

const ImageUpload = ({
  label,
  value,
  onChange,
  className = "",
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) => (
  <div className={`mb-4 ${className}`}>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      type="file"
      accept="image/*"
      onChange={onChange}
      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
    />
    {value && (
      <div className="mt-2">
        <img
          src={value}
          alt="Preview"
          className="h-32 object-cover rounded-md"
        />
      </div>
    )}
  </div>
);

const TeamMemberEditor = ({
  member,
  onChange,
  onRemove,
}: {
  member: TeamMember;
  onChange: (id: string, field: keyof TeamMember, value: string) => void;
  onRemove: (id: string) => void;
}) => (
  <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
    <div className="flex justify-between items-center mb-3">
      <h3 className="font-medium">Team Member</h3>
      <button
        onClick={() => onRemove(member.id)}
        className="text-red-600 hover:text-red-800 text-sm font-medium"
      >
        Remove
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TextInput
        label="Name"
        name="name"
        value={member.name}
        onChange={(e) => onChange(member.id, "name", e.target.value)}
      />
      <TextInput
        label="Role"
        name="role"
        value={member.role}
        onChange={(e) => onChange(member.id, "role", e.target.value)}
      />
      <div className="md:col-span-2">
        <TextArea
          label="Bio"
          value={member.bio}
          onChange={(e) => onChange(member.id, "bio", e.target.value)}
        />
      </div>
      <ImageUpload
        label="Profile Image"
        value={member.image}
        onChange={(e) => {
          if (e.target.files?.[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target?.result) {
                onChange(member.id, "image", event.target.result as string);
              }
            };
            reader.readAsDataURL(e.target.files[0]);
          }
        }}
      />
    </div>
  </div>
);

const TestimonialEditor = ({
  testimonial,
  onChange,
  onRemove,
}: {
  testimonial: Testimonial;
  onChange: (id: string, field: keyof Testimonial, value: string) => void;
  onRemove: (id: string) => void;
}) => (
  <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-gray-50">
    <div className="flex justify-between items-center mb-3">
      <h3 className="font-medium">Testimonial</h3>
      <button
        onClick={() => onRemove(testimonial.id)}
        className="text-red-600 hover:text-red-800 text-sm font-medium"
      >
        Remove
      </button>
    </div>
    <TextArea
      label="Quote"
      value={testimonial.quote}
      onChange={(e) => onChange(testimonial.id, "quote", e.target.value)}
    />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <TextInput
        label="Author"
        name="author"
        value={testimonial.author}
        onChange={(e) => onChange(testimonial.id, "author", e.target.value)}
      />
      <TextInput
        label="Company"
        name="company"
        value={testimonial.company}
        onChange={(e) => onChange(testimonial.id, "company", e.target.value)}
      />
    </div>
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-200">
      {title}
    </h2>
    {children}
  </div>
);

const AboutPagePreview = ({ content }: { content: AboutPageContent }) => (
  <div className="bg-white p-6 rounded-lg shadow">
    {/* Hero Section */}
    <section className="mb-12">
      <div className="relative bg-gray-100 rounded-lg overflow-hidden h-64 flex items-center justify-center">
        {content.heroImage ? (
          <img
            src={content.heroImage}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400">Hero Image Preview</div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center text-center p-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">
              {content.heroTitle}
            </h1>
            <p className="text-xl text-white">{content.heroSubtitle}</p>
          </div>
        </div>
      </div>
    </section>

    {/* Our Story */}
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Our Story</h2>
      <div className="prose max-w-none">
        <p>{content.ourStory}</p>
      </div>
    </section>

    {/* Team Members */}
    {content.teamMembers.length > 0 && (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400">No Image</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-indigo-600 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )}

    {/* Testimonials */}
    {content.testimonials.length > 0 && (
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Testimonials</h2>
        <div className="space-y-6">
          {content.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 p-6 rounded-lg">
              <blockquote className="text-lg italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="font-medium">
                <p>{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )}
  </div>
);

// Main Component
const AboutPageAdmin = () => {
  const [content, setContent] = useState<AboutPageContent>({
    heroTitle: "About Our Company",
    heroSubtitle: "Building digital experiences since 2010",
    heroImage: "",
    ourStory:
      "Our journey began in a small office with just three people and a big dream. Over the years, we've grown into a team of passionate professionals dedicated to delivering exceptional digital solutions.",
    ourMission: "To empower businesses through innovative technology solutions",
    ourVision: "A world where technology enhances every aspect of human life",
    teamMembers: [
      {
        id: "1",
        name: "John Doe",
        role: "CEO & Founder",
        bio: "John has over 15 years of experience in the tech industry.",
        image: "",
      },
    ],
    testimonials: [
      {
        id: "1",
        quote: "Working with this company transformed our business.",
        author: "Jane Smith",
        company: "Acme Inc",
      },
    ],
  });

  const [isPreview, setIsPreview] = useState(false);

  // Handle text field changes
  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image upload
  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof AboutPageContent
  ) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setContent((prev) => ({
            ...prev,
            [field]: event?.target?.result as string,
          }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // Team member functions
  const addTeamMember = () => {
    setContent((prev) => ({
      ...prev,
      teamMembers: [
        ...prev.teamMembers,
        { id: Date.now().toString(), name: "", role: "", bio: "", image: "" },
      ],
    }));
  };

  const updateTeamMember = (
    id: string,
    field: keyof TeamMember,
    value: string
  ) => {
    setContent((prev) => ({
      ...prev,
      teamMembers: prev.teamMembers.map((member) =>
        member.id === id ? { ...member, [field]: value } : member
      ),
    }));
  };

  const removeTeamMember = (id: string) => {
    setContent((prev) => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((member) => member.id !== id),
    }));
  };

  // Testimonial functions
  const addTestimonial = () => {
    setContent((prev) => ({
      ...prev,
      testimonials: [
        ...prev.testimonials,
        { id: Date.now().toString(), quote: "", author: "", company: "" },
      ],
    }));
  };

  const updateTestimonial = (
    id: string,
    field: keyof Testimonial,
    value: string
  ) => {
    setContent((prev) => ({
      ...prev,
      testimonials: prev.testimonials.map((testimonial) =>
        testimonial.id === id ? { ...testimonial, [field]: value } : testimonial
      ),
    }));
  };

  const removeTestimonial = (id: string) => {
    setContent((prev) => ({
      ...prev,
      testimonials: prev.testimonials.filter(
        (testimonial) => testimonial.id !== id
      ),
    }));
  };

  const saveChanges = async () => {
    try {
      console.log("Saving content:", content);
      alert("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving:", error);
      alert("Failed to save changes");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="w-64 bg-gray-800 text-white fixed top-0 left-0 h-screen z-10">
        <Sidebar />
      </div>
      {/* Main Content */}
      <div className="ml-64 flex-1 flex flex-col bg-slate-900">
        <Header />

        <div className="min-h-screen overflow-y-auto bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h1 className="text-2xl font-bold text-gray-900">
                    About Page Editor
                  </h1>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setIsPreview(!isPreview)}
                      className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {isPreview ? "Edit Mode" : "Preview Mode"}
                    </button>
                    <button
                      onClick={saveChanges}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {isPreview ? (
                  <AboutPagePreview content={content} />
                ) : (
                  <div className="space-y-8">
                    {/* Hero Section */}
                    <Section title="Hero Section">
                      <TextInput
                        label="Title"
                        name="heroTitle"
                        value={content.heroTitle}
                        onChange={handleTextChange}
                      />
                      <TextInput
                        label="Subtitle"
                        name="heroSubtitle"
                        value={content.heroSubtitle}
                        onChange={handleTextChange}
                      />
                      <ImageUpload
                        label="Hero Image"
                        value={content.heroImage}
                        onChange={(e) => handleImageUpload(e, "heroImage")}
                      />
                    </Section>

                    {/* Our Story */}
                    <Section title="Our Story">
                      <TextArea
                        label="Our Story"
                        // name="ourStory"
                        value={content.ourStory}
                        onChange={(e) => handleTextChange(e)}
                      />
                      <TextInput
                        label="Our Mission"
                        name="ourMission"
                        value={content.ourMission}
                        onChange={handleTextChange}
                      />
                      <TextInput
                        label="Our Vision"
                        name="ourVision"
                        value={content.ourVision}
                        onChange={handleTextChange}
                      />
                    </Section>

                    {/* Team Members */}
                    <Section title="Team Members">
                      <button
                        onClick={addTeamMember}
                        className="mb-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Add Team Member
                      </button>
                      {content.teamMembers.map((member) => (
                        <TeamMemberEditor
                          key={member.id}
                          member={member}
                          onChange={updateTeamMember}
                          onRemove={removeTeamMember}
                        />
                      ))}
                    </Section>

                    {/* Testimonials */}
                    <Section title="Testimonials">
                      <button
                        onClick={addTestimonial}
                        className="mb-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Add Testimonial
                      </button>
                      {content.testimonials.map((testimonial) => (
                        <TestimonialEditor
                          key={testimonial.id}
                          testimonial={testimonial}
                          onChange={updateTestimonial}
                          onRemove={removeTestimonial}
                        />
                      ))}
                    </Section>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPageAdmin;
