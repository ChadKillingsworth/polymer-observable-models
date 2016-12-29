# Polymer Observable Properties
Using custom models with Polymer properties is challenging. Polymer requires that `this.notifyPath` be
called for external changes to deep model properties in order for it to recognize the update. This project
demonstrates adding support for an `ObservableModel` type as a Polymer property.

The model has an `observable` method which returns an `Observable` that enables Polymer to subscribe to update notifications. The model emits property updates which Polymer uses to automatically call notifyPath.

## Example usage
The [custom-element.html file](custom-element.html) has an example usage.

## How to Test
Install the dependencies with `bower install`. Open the `index.html` file in a web browser. There is a global
user object. Changing the `user.name` property of the global object should automatically update the displayed
name.
