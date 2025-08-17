import React, { useState } from "react";

type ThemeOption = "system" | "light" | "dark";

type SettingsState = {
  name: string;
  email: string;
  language: string;
  timezone: string;
  receiveEmails: boolean;
  twoFactor: boolean;
  theme: ThemeOption;
};

const defaultState: SettingsState = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  language: "English",
  timezone: "UTC",
  receiveEmails: true,
  twoFactor: false,
  theme: "system",
};

const Toggle: React.FC<{
  checked: boolean;
  onChange: (v: boolean) => void;
  label?: string;
}> = ({ checked, onChange, label }) => {
  return (
    <label className="flex items-center space-x-3">
      <span className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <div
          className={`w-11 h-6 rounded-full transition-colors duration-200 ${
            checked ? "bg-indigo-600" : "bg-gray-300"
          }`}
        />
        <div
          className={`absolute left-0 top-0 mt-0.5 ml-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </span>
      {label && <span className="text-sm text-gray-700">{label}</span>}
    </label>
  );
};

export default function Settings(): React.ReactElement {
  const [state, setState] = useState<SettingsState>(defaultState);
  const [saving, setSaving] = useState(false);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = <K extends keyof SettingsState>(
    key: K,
    value: SettingsState[K]
  ) => {
    setState((s) => ({ ...s, [key]: value }));
    setErrors((e) => ({ ...e, [key]: "" }));
  };

  const validate = (): boolean => {
    const next: Record<string, string> = {};
    if (!state.name.trim()) next.name = "Name is required.";
    if (!state.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
      next.email = "Invalid email.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSave = () => {
    if (!validate()) return;
    setSaving(true);
    setSavedMessage(null);
    // simulate API save
    setTimeout(() => {
      setSaving(false);
      setSavedMessage("Settings saved successfully");
      setTimeout(() => setSavedMessage(null), 3000);
    }, 900);
  };

  const onReset = () => {
    setState(defaultState);
    setErrors({});
    setSavedMessage("Reset to defaults");
    setTimeout(() => setSavedMessage(null), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">Settings</h2>
          <p className="text-sm text-gray-500">
            Manage your account and application preferences
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={onReset}
            className="px-3 py-1.5 border rounded-md text-sm text-gray-700 hover:bg-gray-50"
            type="button"
          >
            Reset
          </button>
          <button
            onClick={onSave}
            disabled={saving}
            className={`px-4 py-2 rounded-md text-white text-sm ${
              saving ? "bg-indigo-300" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
            type="button"
          >
            {saving ? "Saving..." : "Save changes"}
          </button>
        </div>
      </div>

      {savedMessage && (
        <div className="mb-4 p-3 rounded-md bg-green-50 text-green-800 text-sm">
          {savedMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column: Profile & Account */}
        <div className="md:col-span-2 space-y-6">
          <section className="p-4 border rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Profile</h3>
            <p className="text-xs text-gray-500 mb-4">
              Your public-facing information.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Full name</label>
                <input
                  value={state.name}
                  onChange={(e) => update("name", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-200"
                />
                {errors.name && (
                  <p className="text-xs text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  value={state.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-200"
                />
                {errors.email && (
                  <p className="text-xs text-red-600 mt-1">{errors.email}</p>
                )}
              </div>
            </div>
          </section>

          <section className="p-4 border rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Account</h3>
            <p className="text-xs text-gray-500 mb-4">
              Account-level preferences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Language</label>
                <select
                  value={state.language}
                  onChange={(e) => update("language", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-200"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600">Timezone</label>
                <select
                  value={state.timezone}
                  onChange={(e) => update("timezone", e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:ring-2 focus:ring-indigo-200"
                >
                  <option>UTC</option>
                  <option>GMT</option>
                  <option>PST</option>
                </select>
              </div>
            </div>
          </section>

          <section className="p-4 border rounded-lg">
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Notifications
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              Control how you receive notifications.
            </p>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-700">
                    Email notifications
                  </div>
                  <div className="text-xs text-gray-500">
                    Receive updates and announcements by email
                  </div>
                </div>
                <Toggle
                  checked={state.receiveEmails}
                  onChange={(v) => update("receiveEmails", v)}
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-700">
                    Two-factor authentication
                  </div>
                  <div className="text-xs text-gray-500">
                    Add an extra layer of security to your account
                  </div>
                </div>
                <Toggle
                  checked={state.twoFactor}
                  onChange={(v) => update("twoFactor", v)}
                />
              </div>
            </div>
          </section>
        </div>

        {/* Right column: Appearance & Danger Zone */}
        <aside className="space-y-6">
          <section className="p-4 border rounded-lg">
            <h4 className="text-md font-medium text-gray-800 mb-3">
              Appearance
            </h4>
            <div className="text-xs text-gray-500 mb-3">Choose theme</div>
            <div className="space-y-2">
              <label
                className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                  state.theme === "system" ? "bg-indigo-50" : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="theme"
                  checked={state.theme === "system"}
                  onChange={() => update("theme", "system")}
                />
                <span className="text-sm">System</span>
              </label>
              <label
                className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                  state.theme === "light" ? "bg-indigo-50" : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="theme"
                  checked={state.theme === "light"}
                  onChange={() => update("theme", "light")}
                />
                <span className="text-sm">Light</span>
              </label>
              <label
                className={`flex items-center space-x-2 p-2 rounded-md cursor-pointer ${
                  state.theme === "dark" ? "bg-indigo-50" : "hover:bg-gray-50"
                }`}
              >
                <input
                  type="radio"
                  name="theme"
                  checked={state.theme === "dark"}
                  onChange={() => update("theme", "dark")}
                />
                <span className="text-sm">Dark</span>
              </label>
            </div>
          </section>

          <section className="p-4 border rounded-lg bg-white">
            <h4 className="text-md font-medium text-gray-800 mb-3">
              Danger zone
            </h4>
            <p className="text-xs text-gray-500 mb-4">
              Actions in this section are irreversible. Be careful.
            </p>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 rounded-md border text-red-600 hover:bg-red-50">
                Delete account
              </button>
              <button className="w-full text-left px-3 py-2 rounded-md border text-gray-700 hover:bg-gray-50">
                Deactivate account
              </button>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
