import { User, Lock, Bell, Palette, Plug } from "lucide-react";

export const settingsSchema = {
  tabs: [
    {
      id: "profile",
      label: "Profile",
      icon: User,
      sections: [
        {
          title: "Basic Info",
          fields: [
            {
              id: "name",
              label: "Full Name",
              type: "text",
              defaultValue: "",
              description: "Your full name as you want it displayed.",
            },
            {
              id: "username",
              label: "Username",
              type: "text",
              defaultValue: "",
              description: "Your unique username for login and mentions.",
            },
            {
              id: "email",
              label: "Email Address",
              type: "email",
              defaultValue: "",
              description: "We’ll send notifications to this email.",
            },
            {
              id: "avatar",
              label: "Avatar",
              type: "image",
              defaultValue: null,
              description: "Upload a profile picture.",
            },
          ],
        },
        {
          title: "Contact",
          fields: [
            {
              id: "phone",
              label: "Phone Number",
              type: "tel",
              defaultValue: "",
              description:
                "Optional: for two-factor authentication and notifications.",
            },
            {
              id: "location",
              label: "Location",
              type: "text",
              defaultValue: "",
              description: "Optional: your city or office location.",
            },
          ],
        },
      ],
    },
    {
      id: "security",
      label: "Security",
      icon: Lock,
      sections: [
        {
          title: "Password",
          fields: [
            {
              id: "currentPassword",
              label: "Current Password",
              type: "password",
              defaultValue: "",
              description: "Enter your current password to make changes.",
            },
            {
              id: "newPassword",
              label: "New Password",
              type: "password",
              defaultValue: "",
              description: "Choose a strong, unique password.",
            },
            {
              id: "confirmPassword",
              label: "Confirm Password",
              type: "password",
              defaultValue: "",
              description: "Re-enter your new password for confirmation.",
            },
          ],
        },
        {
          title: "Two-Factor Authentication",
          fields: [
            {
              id: "2fa",
              label: "Enable 2FA",
              type: "checkbox",
              defaultValue: false,
              description: "Extra layer of security for your account.",
            },
            {
              id: "2faMethod",
              label: "2FA Method",
              type: "select",
              options: ["SMS", "Authenticator App", "Email"],
              defaultValue: "SMS",
              description: "Choose how you want to receive your 2FA codes.",
            },
          ],
        },
      ],
    },
    {
      id: "notifications",
      label: "Notifications",
      icon: Bell,
      sections: [
        {
          title: "Email Notifications",
          fields: [
            {
              id: "taskAssigned",
              label: "Task Assigned",
              type: "checkbox",
              defaultValue: true,
              description: "Receive an email when you are assigned a task.",
            },
            {
              id: "taskUpdated",
              label: "Task Updated",
              type: "checkbox",
              defaultValue: true,
              description:
                "Receive an email when a task you follow is updated.",
            },
            {
              id: "commentAdded",
              label: "Comment Added",
              type: "checkbox",
              defaultValue: true,
              description:
                "Receive an email when someone comments on your task.",
            },
          ],
        },
        {
          title: "Push Notifications",
          fields: [
            {
              id: "desktop",
              label: "Desktop Notifications",
              type: "checkbox",
              defaultValue: false,
              description: "Show notifications on your desktop.",
            },
            {
              id: "mobile",
              label: "Mobile Notifications",
              type: "checkbox",
              defaultValue: true,
              description: "Receive push notifications on your mobile device.",
            },
          ],
        },
      ],
    },
    {
      id: "appearance",
      label: "Appearance",
      icon: Palette,
      sections: [
        {
          title: "Theme",
          fields: [
            {
              id: "theme",
              label: "Theme",
              type: "select",
              options: ["Light", "Dark", "System Default"],
              defaultValue: "System Default",
              description: "Choose your preferred interface theme.",
            },
            {
              id: "fontSize",
              label: "Font Size",
              type: "select",
              options: ["Small", "Medium", "Large"],
              defaultValue: "Medium",
              description: "Adjust the font size for better readability.",
            },
          ],
        },
      ],
    },
    {
      id: "integrations",
      label: "Integrations",
      icon: Plug,
      sections: [
        {
          title: "Connected Apps",
          fields: [
            {
              id: "slack",
              label: "Slack",
              type: "switch",
              defaultValue: false,
              description:
                "Enable Slack integration to receive updates in your workspace.",
            },
            {
              id: "github",
              label: "GitHub",
              type: "switch",
              defaultValue: false,
              description:
                "Connect your GitHub account to link issues and pull requests.",
            },
            {
              id: "jira",
              label: "Jira",
              type: "switch",
              defaultValue: false,
              description:
                "Connect Jira to sync tasks and issues automatically.",
            },
          ],
        },
      ],
    },
  ],
} as const;
