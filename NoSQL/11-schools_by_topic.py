#!/usr/bin/env python3
"""Module that contains a function to find schools by topic."""


def schools_by_topic(mongo_collection, topic):
    """Return the list of schools having a specific topic.

    Args:
        mongo_collection: the pymongo collection object
        topic: the topic to search for

    Returns:
        a list of schools with the specified topic
    """
    return list(mongo_collection.find({"topics": topic}))
